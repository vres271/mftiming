import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {  map, tap, catchError, } from 'rxjs/operators';
import {  of, from, fromEvent } from 'rxjs';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class CoreService {
  public session: {sid: string};
  public user: {
    id: number, 
    name: string,
    rights: any,
    super?: boolean,
  };
  public ref: any;
  public settings: any;
  public loggedInEvent: Event = new Event('coreloggedIn');
  public checkAuthError: Event = new Event('coreCheckAuthError');
  public readyEvent: Event = new Event('coreReady');

  constructor(
    public api: APIService,
  ) { 
    this.session = null;
    this.user = null;
  }

  public onLoggedIn(): Observable<Event> {
    return fromEvent(document, 'coreloggedIn')
  }

  public onCheckAuthError(): Observable<Event> {
    return fromEvent(document, 'coreCheckAuthError')
  }

  public init():Observable<any> {
    return this.api.request('GET','core/auth')
      .pipe(
        catchError(err=>{this.clearSession(); document.dispatchEvent(this.checkAuthError); return of(err)}),
        tap(res=>{
          this.ref = res.ref;
          this.settings = res.settings;
        }),
        tap(res=>this.createSession(res)),
     )
  }


  public login(LoginData):Observable<any> {
    return this.api.request('POST','core/login', LoginData)
      .pipe(
        catchError(err=>{this.clearSession(); throw err}),
        tap((res:any)=>{
          this.ref = res.ref;
          this.settings = res.settings;
        }),
        tap(res=>this.createSession(res)),
      );
  }

  public logOut():Observable<any> {
    return this.api.request('DELETE','core/logout')
      .pipe(
        tap(res=>{
          if(res.logout) this.clearSession();
          return res;
        })
      )
  }

  public clearSession() {
    this.session = null;
    this.user = null;
  }

  public createSession(res):object {
    if(res.user) {
      this.user = res.user;
      this.session = {sid:res.sid};
      document.dispatchEvent(this.loggedInEvent);
      return this.session;
    }
    return null;
  }

  public getUser():Observable<any> {
    return this.api.request('GET','core/getuser');
  }

  public getUsers():Observable<any> {
    return this.api.request('GET','users');
  }

  public createRightsAliases(services:any[]) {
    services.forEach((svc:any)=>{
      if(svc._itemService._itemType&&this.user.rights.items[svc._itemService._itemType]) {
        svc.r = this.user.rights.items[svc._itemService._itemType];
      }
    });
  }



}
