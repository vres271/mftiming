import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class Event extends Item{
  public accountId: number;
  public eventType: number;
  public raceId: number;
  public competitorId: number;
  public t: number;
  public desc: string;
  public d: number;

  constructor(item_, public _parent) {
    super(item_,_parent);
  }

  public get competitor() : any|null {
    return (this.competitorId&&this._parent.app&&this._parent.app.competitors._index&&this._parent.app.competitors._index.id&&this._parent.app.competitors._index.id[this.competitorId])?this._parent.app.competitors._index.id[this.competitorId]:null;
  }

  public get competitorName() : string {
    return this.competitor?this.competitor.fullName:'';
  }

  public get competitorNum() : string {
    return this.competitor?this.competitor.num:'';
  }

  public get categoryName() : string {
    return this.competitor?this.competitor.categoryName:'';
  }

}

export class EventService extends ItemService {
  
  public _itemType: string = 'events';
  public _item: Event;
  constructor(public api: APIService) {
    super(api)
  }

  public create(item_,parent) {
   return new Event(item_,parent)
  }


}
