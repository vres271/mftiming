import { Injectable } from '@angular/core';
import { Race } from '../services/race.service';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  public race: Race|null = null;
  public app:any = null;
  public _start:any|null = {};
  public getStart(categoryId) : any|null {
    if(this._start&&Object.keys(this._start).length===1&&this._start[0]) return this._start[0];
    if(categoryId&&this._start[categoryId]) return this._start[categoryId];
    if(this._start&&this._start[Object.keys(this._start)[0]]) return this._start[Object.keys(this._start)[0]];
    return null;
  }
  public finish:any|null = null;
  public raceEvents: any|null = null;
  public items: any|null = {};
  public items2: any[]|null = [];

  constructor() { }

  public get() {
    this.items2=[];
    this.items={};
    this.raceEvents = this.app.events.items.filter(item=>1*item.raceId===1*this.race.id).sort((a,b)=>(a.t-b.t))

    let compLapsT = {};
    this.raceEvents.forEach(item=>{
      if(item.eventType===2) {
        if(item.categoryIds&&item.categoryIds.length) {
          item.categoryIds.forEach(categoryId=>{
            this._start[categoryId] = item;
          })
        } else {
          this._start[0] = item;
        }
        
      }
      if(item.eventType===3) {this.finish=item}
      if(item.eventType===1) {
        if(!this.items[item.competitorId]) this.items[item.competitorId] = {events:[],competitor:item.competitor};

        if(!compLapsT[item.competitorId] && this.getStart(item.categoryId)) {
          item._lapT = item.t - this.getStart(item.categoryId).t; 
        } else {
          item._lapT = item.t - compLapsT[item.competitorId];
        }
        compLapsT[item.competitorId]=item.t;
        item.pos = item.competitor.category.pos||0;

        this.items[item.competitorId].events.push(item);
        this.items[item.competitorId].t = item.t;
        this.items[item.competitorId].pos = item.competitor.category.pos||0;
      }
    })

    for(let key in this.items) {
      this.items2.push(this.items[key]);
    }

    this.items2.sort((a,b)=>(a.t-b.t))


  }
}
