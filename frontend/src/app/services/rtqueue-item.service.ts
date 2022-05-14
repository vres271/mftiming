import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class RTQueueItem extends Item{

  public type: number;
  public recievers_id: number;
  public units_id: number;
  public units_imei: string;
  public tags_id: number;
  public tags_num: number;
  public value: string;
  public users_id: number;
  public started: number;
  public finished: number;
  public status: number;
  public result: string;
  public try: number;
  public try_limit: number;
  public c: number;

  constructor(item_, public _parent) {
    super(item_,_parent);
  }

  public get userName() : string {
    return (this._parent.app&&this._parent.app.users._index&&this._parent.app.users._index.id&&this._parent.app.users._index.id[this.users_id])?this._parent.app.users._index.id[this.users_id].name:'';
  }

  public get unitNm() : string {
    return (this._parent.app&&this._parent.app.units._index&&this._parent.app.units._index.id&&this._parent.app.units._index.id[this.units_id])?this._parent.app.units._index.id[this.units_id].nm:'';
  }

  public get recieverName() : string {
    return (this._parent.app&&this._parent.app.recievers._index&&this._parent.app.recievers._index.id&&this._parent.app.recievers._index.id[this.recievers_id])?this._parent.app.recievers._index.id[this.recievers_id].name:'';
  }

  public get tagName() : string {
    return (this._parent.app&&this._parent.app.tags._index&&this._parent.app.tags._index.id&&this._parent.app.tags._index.id[this.tags_id])?this._parent.app.tags._index.id[this.tags_id].name:'';
  }

  public get typeName() : string {
    return this.type&&this._parent.app&&this._parent.app.ref&&this._parent.app.ref.rtqueue_types[this.type];
  }

  public get statusName() : string {
    return this.status&&this._parent.app&&this._parent.app.ref&&this._parent.app.ref.rtqueue_statuses[this.status];
  }

  public retry():Observable<any> {
    return this._parent._itemService.retry(this);
  }

  public setStatus():Observable<any> {
    return this._parent._itemService.setStatus(this);
  }


}

export class RTQueueItemService extends ItemService {
  
  public _itemType: string = 'rtqueue';
  public _item: RTQueueItem;
  constructor(public api: APIService) {
    super(api)
  }

  public create(item_,parent) {
   return new RTQueueItem(item_,parent)
  }

  public retry(item: any, params?:any):Observable<any> {
    return this.api.request('PUT', 'rtqueue/'+item.id+'/retry');
  }

  public setStatus(item: any, params?:any):Observable<any> {
    return this.api.request('PUT', 'rtqueue/'+item.id+'/setstatus', params);
  }


}
