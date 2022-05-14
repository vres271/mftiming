import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  map, tap, switchMap} from 'rxjs/operators';
import { APIService } from '../services/api.service';
import { DriversService } from '../services/drivers.service';

@Injectable({
  providedIn: 'root'
})

export class TrashItem {
  public id: number;
  public name: string;
  public type: string = 'trash-item';

  constructor(item_, public _parent) {
    for(var key in item_) {
      this[key] = item_[key];
    }
  }
}



export class TrashService {

  public app: any = null;
  public trashTypes: string[] = [];
  public ready: boolean = false;
  public r: any = {};
  //public items: {string:TrashItem[]}  = [];
  public items: any = {};
  public allItems: any = [];

  constructor(
    public api: APIService,
  ) {}

  public createItem(item, type) {
    return this.app[type][(type!=='ugroups'?type:'userGroups').slice(0, -1)+'Service'].create(item,this.app[type]);
  }

  public get(type?: string, id?:number):Observable<TrashItem[]> {
    this.ready = false;
    let stringParams = '';
    return this.api.request('GET', 'trash'+(type?('/'+type):'')+(id?('/'+id):''))
      .pipe(
        map((res:any)=>{
          this.allItems = [];
          for(let typeKey in res.items) {
            let items = res.items[typeKey].items;
            this.clearItems(typeKey);
            for(var key in items) {
              let item = this.createItem(items[key], typeKey);
              if(!this.items[typeKey]) this.items[typeKey] = [];
              this.items[typeKey].push(item);
            }
            if(this.items[typeKey]) {this.allItems = this.allItems.concat(this.items[typeKey]);}
          }
          this.ready = true;
          return this.items
        }),
      );
  }

  public clearItems(type) {
    if(type&&this.items[type]) this.items[type] = [];
  }

  public restore(item):Observable<any> {
    return item.restore()
      .pipe(
        tap((res)=>{
          this.app[item._parent._itemService._itemType].get().subscribe();
        })
      )
  }

  public removeItem(item) {
    if(this.allItems) {
      let index = null;
      for(let key in this.allItems) {
        let trashItem = this.allItems[key];
        if(trashItem.id===item.id) {
          index = key;
          break;
        }
      }
      if(index !== -1) this.allItems.splice(index, 1); 
    }
    if(this.items[item.itemType]) {
      let index = null;
      for(let key in this.items[item.itemType]) {
        let trashItem = this.items[item.itemType][key];
        if(trashItem.id===item.id) {
          index = key;
          break;
        }
      }
      if(index !== -1) this.items[item.itemType].splice(index, 1); 
    }
  }

  public get Length():number {
    let trashSize = 0;
    if(this.app.ready) {
      for(let key in this.trashTypes) {
        if(this.app[this.trashTypes[key]].trash.length>0) {
          trashSize += this.app[this.trashTypes[key]].trash.length;
        }
      }
    }
    return trashSize;
  }

}
