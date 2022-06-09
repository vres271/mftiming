import { Injectable } from '@angular/core';
import { Race } from '../services/race.service';

@Injectable({
  providedIn: 'root'
})
export class ResultsService {
  public race: Race|null = null;
  public app:any = null;
  public start:any|null = null;
  public finish:any|null = null;
  public raceEvents: any|null = null;
  public items: any|null = {};
  public items2: any[]|null = [];

  constructor() { }

  public get() {
    this.items2=[];
    this.items={};
    this.raceEvents = this.app.events.items.filter(item=>1*item.raceId===1*this.race.id).sort((a,b)=>(a.t-b.t))

    this.raceEvents.forEach(item=>{
      if(item.eventType===2) {this.start=item}
      if(item.eventType===3) {this.finish=item}
      if(item.eventType===1) {
        if(!this.items[item.competitorId]) this.items[item.competitorId] = {events:[],competitor:item.competitor};
        this.items[item.competitorId].events.push(item)
      }
    })

    for(let key in this.items) {
      this.items2.push(this.items[key]);
    }

    console.log(this.items2)

  }
}
