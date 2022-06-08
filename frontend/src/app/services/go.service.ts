import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';
import { Race } from '../services/race.service';
import { EventsService } from '../services/events.service';

@Injectable({
  providedIn: 'root'
})

export class GoService {
  public race: Race|null = null;
  public t: number = (new Date()).getTime();
  public tIntervalId: any = 0;
  public app:any = null;

  public start:any|null = null;
  public finish:any|null = null;
  public raceEvents: any|null = null;

  constructor(
    public events: EventsService
    ) {
    this.tIntervalId = setInterval(()=>{
      this.t = (new Date()).getTime();
    },10)
  }

  public get() {

    this.raceEvents = this.events.items.filter(item=>1*item.raceId===1*this.race.id).sort((a,b)=>(a.t-b.t))

    let compLaps = {};
    let compLapsT = {};
    this.raceEvents.forEach(item=>{

      if(item.eventType===2) {this.start=item}
      if(item.eventType===3) {this.finish=item}

      if(item.eventType===1&&item.competitorId) {
        if(!compLaps[item.competitorId]) compLaps[item.competitorId]=0;
        compLaps[item.competitorId]++;
        item._lap = compLaps[item.competitorId];

        if(!compLapsT[item.competitorId] && this.start) {
          item._lapT = item.t - this.start.t; 
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


    })

    this.raceEvents = this.raceEvents.sort((a,b)=>(b.t-a.t))

  }


  public reset() {
    this.race = null;
    this.start = null;
    this.finish = null;
    this.raceEvents = null;
  }

}

