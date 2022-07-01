import { Injectable } from '@angular/core';
import { Observable, iif } from 'rxjs';
import { throwError, of , fromEvent} from 'rxjs';
import { catchError, map, tap, retry, retryWhen, concat , take, mergeMap, delay, concatMap, switchMap} from 'rxjs/operators';

import { CoreService } from '../services/core.service';

import { CompetitorsService } from '../services/competitors.service';
import { CategoriesService } from '../services/categories.service';
import { RacesService } from '../services/races.service';
import { GoService } from '../services/go.service';
import { RaceEventsService } from '../services/raceevents.service';
import { ResultsService } from '../services/results.service';

import { UsersService } from '../services/users.service';
import { UserGroupsService } from '../services/user-groups.service';
import { LogService } from '../services/log.service';
import { TrashService } from '../services/trash.service';
import { StateService } from '../services/state.service';
import { APPEventsService } from '../services/appevents.service';
import { ReferenceService } from '../services/reference.service';
import { SettingsService } from '../services/settings.service';
import { AccountsService } from '../services/accounts.service';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public readyEvent: Event = new Event('appReady');
  public accountsReadyEvent: Event = new Event('accountsReady');
  public ready: boolean = false;
  public addPaths: object =  {
    users: 'user',
    competitors: 'competitor',
    categories: 'category',
    races: 'race',
    raceevents: 'raceevent',

    ugroups: 'user-group',
    recievers: 'reciever',
    accounts: 'account',
    log: '',
  }

  constructor(
    public core: CoreService,
    public trash: TrashService,
    public settings: SettingsService,
    public ref: ReferenceService,
    public APPEvents: APPEventsService,
    public state: StateService,
    public users: UsersService,
    public categories: CategoriesService,
    public competitors: CompetitorsService,
    public races: RacesService,
    public raceevents: RaceEventsService,
    public go: GoService,
    public results: ResultsService,

    public log: LogService,

    public accounts: AccountsService,
    public seasons: TrashService,
    public ugroups: UserGroupsService,
    ) {

    this.users.app = this;
    this.ugroups.app = this;
    this.competitors.app = this;
    this.categories.app = this;
    this.races.app = this;
    this.raceevents.app = this;
    this.log.app = this;
    this.trash.app = this;
    this.accounts.app = this;
    this.trash.trashTypes = ['competitors','categories','races','raceevents','users','ugroups'];
    this.state.createDefaults(['competitors','categories','races','raceevents','users','ugroups','log','trash','accounts']);
    this.go.app = this;
    this.results.app = this;
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
        mergeMap(()=>iif(()=>this.accounts.ready, of(true), fromEvent(document, 'accountsReady')))
      )
  }

  public init() {
    this.core.onLoggedIn()
      .pipe(
        tap(_=>{
          this.settings.set(this.core.settings);
          this.ref.set(this.core.ref);
        }),
        tap(_=>{this.ready = false;}),
        tap(_=>{this.core.createRightsAliases([this.users,this.log,this.competitors,this.categories,this.races,this.raceevents])}),
        switchMap(_=>this.users.get()),
        switchMap(_=>this.ugroups.get().pipe(
          switchMap(_=>this.competitors.get()),
          switchMap(_=>this.categories.get()),
          switchMap(_=>this.races.get()),
          switchMap(_=>this.raceevents.get()),
          )),
        //tap(_=>{this.rtqueue.get().subscribe()}),
        tap(_=>{ this.APPEvents.startAutoRefresh().subscribe()}),
        tap(_=>{if(this.core.user.super) this.accounts.get().subscribe(_=>{document.dispatchEvent(this.accountsReadyEvent)})}),
      )
      .subscribe(res=>{
        this.ready = true;
        document.dispatchEvent(this.readyEvent);

      });
  }

}
