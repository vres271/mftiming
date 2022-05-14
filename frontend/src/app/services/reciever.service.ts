import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class Reciever extends Item{
  public units_id: number;
  public tags: [number];

  constructor(item_, public _parent) {
    super(item_,_parent);
  }

  public get name() : string {
    return '#'+this.id+' '+this.unitNm;
  }

  public get unitNm() : string {
    return (this._parent.app&&this._parent.app.units._index&&this._parent.app.units._index.id&&this._parent.app.units._index.id[this.units_id])?this._parent.app.units._index.id[this.units_id].nm:'';
  }

  public get unitHw() : string {
    return (this._parent.app&&this._parent.app.units._index&&this._parent.app.units._index.id&&this._parent.app.units._index.id[this.units_id])?this._parent.app.units._index.id[this.units_id].hw:'';
  }

  public get unitHwName() : string {
    return (this._parent.app&&this._parent.app.units._index&&this._parent.app.units._index.id&&this._parent.app.units._index.id[this.units_id])?this._parent.app.units._index.id[this.units_id].hwName:'';
  }

  public get unitUid() : string {
    return (this._parent.app&&this._parent.app.units._index&&this._parent.app.units._index.id&&this._parent.app.units._index.id[this.units_id])?this._parent.app.units._index.id[this.units_id].uid:'';
  }

  public get tagNums() : string {
    return this.tags.map(id=>(this._parent.app&&this._parent.app.tags._index&&this._parent.app.tags._index.id&&this._parent.app.tags._index.id[id])?this._parent.app.tags._index.id[id].num:'').toString();
  }

  public get shortTagNums() : string {
    return this.tags.map(id=>('#'+id)).toString();
  }

}

export class RecieverService extends ItemService {
  
  public _itemType: string = 'recievers';
  public _item: Reciever;
  constructor(public api: APIService) {
    super(api)
  }

  public create(item_,parent) {
   return new Reciever(item_,parent)
  }


}
