import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class LogItem extends Item{

  public users_id: number;
  public usessions_id: number;
  public ip: string;
  public object_type: number;
  public object_id: number;
  public object_name: string;
  public action_type: number;
  public dt: number;
  public data: any;   
  public type: number;   

  constructor(item_, public _parent) {
    super(item_,_parent);
  }

  public get userName() : string {
    return (this._parent.app&&this._parent.app.users._index&&this._parent.app.users._index.id&&this._parent.app.users._index.id[this.users_id])?this._parent.app.users._index.id[this.users_id].name:'';
  }

  public get objectTypeName() : string {
    return this.object_type&&this._parent.app.ref.object_types[this.object_type];
  }

  public get objectName() : string {
    if(!this._parent.app) return;
    let type = this.objectTypeName;
    if(type&&this._parent.app[type]&&this._parent.app[type]._index&&this._parent.app[type]._index.id&&this._parent.app[type]._index.id[this.object_id]) {
      return '7';
      let item = this._parent.app[type]._index.id[this.object_id];
      if(item.name) return item.name;
    }
    return;
  }

  public get actionTypeName() : string {
    return this.action_type&&this._parent.app.ref.action_types[this.action_type];
  }

}

export class LogItemService extends ItemService {
  
  public _itemType: string = 'log';
  public _item: LogItem;
  constructor(public api: APIService) {
    super(api)
  }

  public create(item_,parent) {
   return new LogItem(item_,parent)
  }


}
