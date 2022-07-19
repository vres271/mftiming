import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class RaceEvent extends Item{
  public accountId: number;
  public eventType: number;
  public raceId: number;
  public competitorId: number;
  public t: number;
  public desc: string;
  public d: number;
  public categoryIds: number[];

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

  public get competitorNameNum() : string {
    return this.competitor?this.competitor.fullNameNum:'';
  }

  public get categoryName() : string {
    return this.competitor?this.competitor.categoryName:'';
  }

  public get categoryId() : string {
    return this.competitor?this.competitor.categoryId:'';
  }

  public get datetime(): string {
    return (new Date(this.t+4*3600000)).toISOString().slice(0,23);
  }

  public set datetime(value:string) {
    this.t = (new Date(value)).valueOf()
  }

  public get raceTime(): string {
    return this._parent&&this._parent.app.go&&this.categoryId?( new Date(this.t - this._parent.app.go.getStart(this.categoryId).t ) ).toISOString().slice(11,23):'';
  }

  public set raceTime(value:string) {
    let s = new Date('1970-01-01T'+value + 'Z').getTime();
    let newT = this._parent.app.go.getStart(this.categoryId).t + s;
    if(!newT) return;
    this.t = newT;
  }

  public get raceTimeFirst(): string {
    return this._parent&&this._parent.app.go?( new Date(this.t - this._parent.app.go.getStart().t ) ).toISOString().slice(11,23):'';
  }

  public set raceTimeFirst(value:string) {
    let s = new Date('1970-01-01T'+value + 'Z').getTime();
    let newT = this._parent.app.go.getStart().t + s;
    if(!newT) return;
    this.t = newT;
  }
  // public get categoriesList() : string {
  //   return this.categoryIds.join(',');
  // }

  // public set categoriesList(value:any) {
  //   console.log(value)
  //   //this.categoryIds = value.split(',').map((str:string)=>parseInt(str));
  // }

}

export class RaceEventService extends ItemService {
  
  public _itemType: string = 'raceevents';
  public eventTypes: string[] = ['','lap','start','finish'];
  public _item: RaceEvent;
  constructor(public api: APIService) {
    super(api)
  }

  public create(item_,parent) {
   return new RaceEvent(item_,parent)
  }


}
