import { Injectable } from '@angular/core';
import { Observable, iif } from 'rxjs';
import { throwError, of , fromEvent} from 'rxjs';
import { catchError, map, tap, retry, retryWhen, concat , take, mergeMap, delay, concatMap, switchMap} from 'rxjs/operators';

import { CoreService } from '../services/core.service';

import { UsersService } from '../services/users.service';
import { UserGroupsService } from '../services/user-groups.service';
import { TagsService } from '../services/tags.service';
import { UnitsService } from '../services/units.service';
import { HWTypesService } from '../services/hwtypes.service';
import { RecieversService } from '../services/recievers.service';
import { CompetitorsService } from '../services/competitors.service';
import { CategoriesService } from '../services/categories.service';
import { LogService } from '../services/log.service';
import { TrashService } from '../services/trash.service';
import { StateService } from '../services/state.service';
import { DistributionsService } from '../services/distributions.service';
import { APPEventsService } from '../services/appevents.service';
import { ReferenceService } from '../services/reference.service';
import { SettingsService } from '../services/settings.service';
import { AccountsService } from '../services/accounts.service';
import { RTQueueService } from '../services/rtqueue.service';

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
    ugroups: 'user-group',
    recievers: 'reciever',
    accounts: 'account',
    log: '',
  }

  constructor(
    public core: CoreService,
    public users: UsersService,
    public accounts: AccountsService,
    public log: LogService,
    public state: StateService,
    public APPEvents: APPEventsService,
    public ref: ReferenceService,
    public settings: SettingsService,
    public trash: TrashService,
    public seasons: TrashService,
    public category: TrashService,
    public race: TrashService,


    public ugroups: UserGroupsService,
    public tags: TagsService,
    public units: UnitsService,
    public hwtypes: HWTypesService,
    public recievers: RecieversService,
    public competitors: CompetitorsService,
    public categories: CategoriesService,
    public distributions: DistributionsService,
    public rtqueue: RTQueueService,
    ) {

    this.users.app = this;
    this.ugroups.app = this;
    this.tags.app = this;
    this.units.app = this;
    this.hwtypes.app = this;
    this.recievers.app = this;
    this.competitors.app = this;
    this.categories.app = this;
    this.log.app = this;
    this.trash.app = this;
    this.distributions.app = this;
    this.accounts.app = this;
    this.rtqueue.app = this;
    this.trash.trashTypes = ['tags','recievers','competitors','categories','users','ugroups'];
    this.state.createDefaults(['tags','recievers','competitors','categories','users','ugroups','log','trash','distributions','accounts','rtqueue']);
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
        tap(_=>{this.core.createRightsAliases([this.users,this.log,this.competitors,this.categories])}),
        switchMap(_=>this.users.get()),
        switchMap(_=>this.ugroups.get().pipe(
          switchMap(_=>this.tags.get()),
          switchMap(_=>this.recievers.get()),
          switchMap(_=>this.competitors.get()),
          switchMap(_=>this.categories.get()),
          switchMap(_=>this.distributions.get()),
          switchMap(_=>this.rtqueue.get()),
          )),
        tap(_=>{this.units.get().subscribe()}),
        tap(_=>{this.hwtypes.get().subscribe()}),
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
