import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class Distribution extends Item{
  public recievers_id: number;
  public tags_id: number;
  public amount: number;
  public total_limit: number;
  public day_limit: number;
  public total_balance: number;
  public day_balance: number;
  public dt: number;


  constructor(item_, public _parent) {
    super(item_,_parent);
  }

  public get name() : string {
    return '#'+this.id;
  }

  public get recieverName() : string {
    return (this._parent.app&&this._parent.app.recievers._index&&this._parent.app.recievers._index.id&&this._parent.app.recievers._index.id[this.recievers_id])?this._parent.app.recievers._index.id[this.recievers_id].name:'';
  }

  public get tagName() : string {
    return (this._parent.app&&this._parent.app.tags._index&&this._parent.app.tags._index.id&&this._parent.app.tags._index.id[this.tags_id])?this._parent.app.tags._index.id[this.tags_id].name:'';
  }

  public get tagDriverName() : string {
    return (this._parent.app&&this._parent.app.tags._index&&this._parent.app.tags._index.id&&this._parent.app.tags._index.id[this.tags_id])?this._parent.app.tags._index.id[this.tags_id].driverName:'';
  }
  public get tagDriverId() : string {
    return (this._parent.app&&this._parent.app.tags._index&&this._parent.app.tags._index.id&&this._parent.app.tags._index.id[this.tags_id])?this._parent.app.tags._index.id[this.tags_id].drivers_id:'';
  }

}

export class DistributionService extends ItemService {
  
  public _itemType: string = 'distributions';
  public _item: Distribution;
  constructor(public api: APIService) {
    super(api)
  }

  public create(item_,parent) {
   return new Distribution(item_,parent)
  }


}
