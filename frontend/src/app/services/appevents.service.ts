import { Injectable } from '@angular/core';
import { Observable, interval } from 'rxjs';
import { throwError, of, from, fromEvent } from 'rxjs';
import { catchError, map, tap, filter, retry, retryWhen, concat , take, mergeMap, delay, concatMap, switchMap} from 'rxjs/operators';

import { APIService } from '../services/api.service';
import { SettingsService } from '../services/settings.service';
import { Indexable } from '../classes/indexable';

@Injectable({
  providedIn: 'root'
})

export class APPEvent {
  public id: number;

  constructor(item_, public _parent) {
    for(var key in item_) {
      this[key] = item_[key];
    }
  }

}

export class APPEventsService  extends Indexable{
  //private autoRefreshDelay: number = 5*1000;

  public _indexableProps:string[] = ['id'];
  private autoRefreshInterval: Observable<any>;
  public appEvent: CustomEvent;

  public lastCheckTime: number = 0;
  public evtsList: any[] = [];


  constructor(
    public api: APIService,
    public settings: SettingsService,
    ) {super()}

  public get():Observable<any> {
    return this.api.request('GET', 'evts/'+this.lastCheckTime);
  }

  public startAutoRefresh(): Observable<any> {
    let lastAutoRefreshTime = new Date().getTime();
    this.autoRefreshInterval = interval(100);
    return this.autoRefreshInterval
      .pipe(
        filter(_=>(lastAutoRefreshTime-100 + this.settings.items.appevts_refresh_interval*1000)<(new Date().getTime()) && (lastAutoRefreshTime-100 + 3000)<(new Date().getTime())),
        //tap((res)=>{console.log(lastAutoRefreshTime - (new Date().getTime()))}),
        tap(_=>{lastAutoRefreshTime = new Date().getTime();}),
        switchMap(_=>this.get()),
        tap((res)=>{if(res.t) this.lastCheckTime = res.t;}),
        tap((res)=>{if(res.i) res.i.forEach((item)=>{this.handle(item); this.evtsList.unshift(item);})}),
      );
  }

  public handle(event) {
    this.appEvent = new CustomEvent('appEvent',{
      bubbles: false,
      detail: event
    });
    document.dispatchEvent(this.appEvent);
  }
}
