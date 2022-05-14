import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError, of } from 'rxjs';
import { catchError, map, tap, retry, retryWhen, concat , take, mergeMap, delay, concatMap, switchMap} from 'rxjs/operators';


import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class Item {
  public id: number = 0;
  public name: string = '';
  public _bckp: any = {};
  public _ready: boolean;
  public _added: boolean = false;
  public _parent: any;

  constructor( item:Item, parent:ItemService) {
    this._parent = parent;
    this._ready =  this._parent._itemService.ready;
    let _s:any = this;
    let item_:any = item
    for(var key in item_) {
      _s[key] = item_[key];
      this._bckp[key] = item_[key];
    }
  }

  public get():Observable<Item> { 
    return this._parent._itemService.get(this);
  }

  public set(propName: string, value: any):Observable<Item> {
    return this._parent.set(this, propName, value)
      .pipe(
        tap((res:any)=>{this._bckp[propName]=res[propName]}),
        map(res=>this),
      );
  }

  public save(params?: any):Observable<Item> { 
    return this._parent._itemService.save(this);
  }

  public del():Observable<Item> { 
    return this._parent._itemService.del(this)
      .pipe(tap((res:any)=>{if(res.deleted) this._parent._itemService.toTrash(this)}));
  }

  public restore():Observable<Item> { 
    return this._parent._itemService.restore(this)
      .pipe(tap((res:any)=>{if(res.restored) this._parent._itemService.fromTrash(this)}));
  }

  public get values():object {
    let values:any = {};
    for(let key in this) {
      if(key[0]!=='_') {values[String(key)]=this[key];}
    }
    return values;
  }

  public get itemType():string {
    return this._parent._itemService._itemType;
  }

}

@Injectable({
  providedIn: 'root'
})

export class ItemService {
  public _itemType: string = 'item';
  public _item: Item|null = null;
  public ready: boolean = false;

  constructor(public api: APIService) { }

  public create(item_:any,parent:any) {
    console.error('Item.create() must be overridden')
    return new Item(item_,parent)
  }

  public get(item: Item|any):Observable<Item> {
    let _params:any;
    this.ready = false;
    if(item.id) _params = {"id":item.id};
    return this.api.request('GET', this._itemType+'/'+item.id)
      .pipe(
        tap((res:any)=>{if(!res.item) throw throwError('Item ('+this._itemType+') with id: '+_params.id+' not found'); }),
        //map((res:any)=>res.item)
        map((res:any) => {
          this.ready = true;
          return this.create(res.item,item._parent)
        }),
      );
  }

  public save(item: Item):Observable<any> {
    return this.api.request('PUT', this._itemType+'/'+item.id, item.values);
  }

  public del(item: Item):Observable<any> {
    return this.api.request('DELETE', this._itemType+'/'+item.id)
  }

  public restore(item: Item) {
    return this.api.request('POST', this._itemType+'/'+item.id);
  }

  private toTrash(item: Item) {
    item._parent.trash.push(item);
  }

  private fromTrash(item: Item) {
    let index = item._parent.trash.indexOf(item);
    if(index<0) {
      for(let key in item._parent.trash) {
        let trashItem = item._parent.trash[key];
        if(trashItem.id===item.id) {
          index = key;
          break;
        }
      }
    }
    if (index !== -1) item._parent.trash.splice(index, 1);    
  }

}
