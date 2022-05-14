import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class Unit extends Item{
  public nm: string;
  public uid: string;
  public hw: number;

  constructor(item_, public _parent) {
    super(item_,_parent);
  }

  public get hwName() : string {
    return (this._parent.app&&this._parent.app.hwtypes._index&&this._parent.app.hwtypes._index.id&&this._parent.app.hwtypes._index.id[this.hw])?this._parent.app.hwtypes._index.id[this.hw].name:'';
  }

}

export class UnitService extends ItemService {
  
  public _itemType: string = 'units';
  public _item: Unit;
  constructor(public api: APIService) {
    super(api)
  }

  public create(item_,parent) {
   return new Unit(item_,parent)
  }


}
