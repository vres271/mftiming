import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError, of, fromEvent } from 'rxjs';
import { catchError, map, tap, retry, filter,  retryWhen, concat , take, mergeMap, delay, concatMap, switchMap} from 'rxjs/operators';

import { APIService } from '../services/api.service';
import { ItemService, Item } from '../services/item.service';
import { Indexable } from '../classes/indexable';


@Injectable({
  providedIn: 'root'
})
export class ItemsService extends Indexable{

  public _indexableProps:string[] = ['id','name'];
  public ready: boolean = false;
  public r: any = {};
  public app:any = null;
  public trash:any[] = [];
  public itemType: string = 'items';

  constructor(
    public api: APIService,
    public _itemService: ItemService, // it wil be overriden with own service in each child class
  ) {
    super();
    this.itemType = this._itemService._itemType;
    this.createEventHandler();
  }

  public get itemTypeId() : number {
    return Object.keys(this.app.ref.object_types).reduce((obj, key)=>{obj[this.app.ref.object_types[key]] = key; return obj; }, {})[this.itemType];
  }

  public get(params?: any):Observable<[any]> {
    this.ready = false;
    let stringParams = '';
    if(params&&typeof(params)==='object') {
      for(let key in params) {
        stringParams += '/'+params[key];
      }
    }
    return this.api.request('GET', this._itemService._itemType+stringParams)
      .pipe(
        map((res:any)=>{
          if(res.error) {
            throw new Error();
          } else {
            return res;
          }
        }),
        retryWhen(err => err.pipe(delay(1000),take(2))),
        map((res:any)=>{
          if(res.items!==undefined) this.clearItems();
          for(var key in res.items) {
            let item = this._itemService.create(res.items[key], this);
            this.items.push(item);
          }
          this.ready = true;
          return this.items
        }),
        tap(items=>this.createIndex(items)),
      );
  }

  public add(newItem:object):Observable<any> {
    this.ready = false;
    return this.api.request('POST', this._itemService._itemType, newItem)
      .pipe(tap(()=>{this.ready = true;}))
  }

  public addMultiple(newItems:[object]):Observable<any> {
    this.ready = false;
    return this.api.request('POST', this._itemService._itemType+'/multiple', newItems)
      .pipe(tap(()=>{this.ready = true;}))
  }

  public clearItems() {
    this.items = [];
  }

  public clear():Observable<any> {
    return this.api.request('DELETE', this._itemService._itemType)
  }


  public createEventHandler() {
    fromEvent(document, 'appEvent')
      .pipe(
        filter((event:CustomEvent)=>{return 1*event.detail.tp===1*this.itemTypeId}),
        )
        .subscribe((event:CustomEvent)=>{
          if(event.detail) {
            if(event.detail.a === 1 || event.detail.a === 4) { // add or restore
              if(event.detail.id) {
                if(!this._index.id[event.detail.id]) {
                  let _item = this._itemService.create({id:event.detail.id},this);
                  this._itemService.get(_item)
                    .subscribe(item=>{
                      if(item) {
                        item._added = true;
                        this.items.push(item);
                        this.createIndex(this.items);  
                      }
                    })
                }
              }
            } else if(event.detail.a === 2 || event.detail.a === 5 || event.detail.a === 6) { // modify | block | unblock
              if(event.detail.id&&this._index.id[event.detail.id]) {
                let item = this._index.id[event.detail.id];
                if(event.detail.d) {
                  for(let key in event.detail.d) {
                    item[key] = event.detail.d[key];
                  }
                  this.createIndex(this.items);
                }
              }
            } else if (event.detail.a === 3) { // delete
              if(event.detail.id&&this._index.id[event.detail.id]) {
                let item = this._index.id[event.detail.id];
                let key = this.items.indexOf(item);
                if(key>-1) {
                  this.items.splice(key,1);
                  this.createIndex(this.items);
                }
              }
            }
          }
        });
  }

}
