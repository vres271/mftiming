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

    this.raceEvents = this.events.items.filter(item=>1*item.raceId===1*this.race.id)

    let startEvents = this.raceEvents.filter(item=>(1*item.eventType===2));
    if(startEvents) this.start = startEvents[0];

    let finishEvents = this.raceEvents.filter(item=>(1*item.eventType===3));
    if(finishEvents) this.finish = finishEvents[0];

    let compLaps = {};
    this.raceEvents.forEach(item=>{
      if(item.eventType===1) {
        if(!compLaps[item.competitorId]) compLaps[item.competitorId]=0;
        compLaps[item.competitorId]++;
        item._lap = compLaps[item.competitorId];
      }
    })

  }


  public reset() {
    this.race = null;
    this.start = null;
    this.finish = null;
    this.raceEvents = null;
  }

}
