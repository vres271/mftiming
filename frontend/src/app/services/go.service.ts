import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Race } from '../services/race.service';
import { RaceEventsService } from '../services/raceevents.service';

@Injectable({
  providedIn: 'root'
})

export class GoService {
  public race: Race|null = null;
  public t: number = (new Date()).getTime();
  public tIntervalId: any = 0;
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

  constructor(
    public events: RaceEventsService
    ) {
    if(this.tIntervalId) clearInterval(this.tIntervalId);
    this.tIntervalId = setInterval(()=>{
      this.t = (new Date()).getTime();
    },10)
  }

  public get() {

    this.raceEvents = this.events.items.filter(item=>1*item.raceId===1*this.race.id).sort((a,b)=>(a.t-b.t))

    let compLaps = {};
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
        if(item.competitorId) {
          if(!compLaps[item.competitorId]) compLaps[item.competitorId]=0;
          compLaps[item.competitorId]++;
          item._lap = compLaps[item.competitorId];


          if(!compLapsT[item.competitorId] && this.getStart(item.categoryId)) {
            item._lapT = item.t - this.getStart(item.categoryId).t; 
          } else {
            item._lapT = item.t - compLapsT[item.competitorId];
          }
          compLapsT[item.competitorId]=item.t;

          if(item.competitor) {
            item.competitor._lastT = this.t-item.t;
            item.competitor._lap = item._lap;
            item.competitor._t = item.t;
          }
        }
        item._raceT = item.t - this.getStart(item.categoryId).t;
      }



    })

    this.raceEvents = this.raceEvents.sort((a,b)=>(b.t-a.t))

  }


  public reset() {
    this.race = null;
    this._start = {};
    this.finish = null;
    this.raceEvents = null;
  }

}

