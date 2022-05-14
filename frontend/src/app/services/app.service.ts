import { Injectable } from '@angular/core';
import { Observable, iif } from 'rxjs';
import { throwError, of , fromEvent} from 'rxjs';
import { catchError, map, tap, retry, retryWhen, concat , take, mergeMap, delay, concatMap, switchMap} from 'rxjs/operators';

import { CoreService } from '../services/core.service';
import { ReferenceService } from '../services/reference.service';


@Injectable({
  providedIn: 'root'
})
export class AppService {
  public readyEvent: Event = new Event('appReady');
  public accountsReadyEvent: Event = new Event('accountsReady');
  public ready: boolean = false;
  public addPaths: object =  {
    users: 'user',
    drivers: 'driver',
    ugroups: 'user-group',
    tags: 'tag',
    recievers: 'reciever',
    accounts: 'account',
    log: '',
  }

  constructor(
    public core: CoreService,
    public ref: ReferenceService,
    ) {

  }

  public onAppReady(): Observable<Event> {
    return fromEvent(document, 'appReady');
  }

  public ifAppReady(): Observable<any> {
    return of(true)
      .pipe(
        mergeMap(()=>iif(()=>this.ready, of(true), this.onAppReady()))
      )
  }

  public ifAccountsReady(): Observable<any> {
    return of(true)
      .pipe(
      )
  }

  public init() {
    this.core.onLoggedIn()
      .pipe(
        tap(_=>{
          this.ref.set(this.core.ref);
        }),
        tap(_=>{this.ready = false;}),
      )
      .subscribe(res=>{
        this.ready = true;
        document.dispatchEvent(this.readyEvent);

      });
  }

}
