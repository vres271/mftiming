import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError, of } from 'rxjs';
import { catchError, map, tap, retry, retryWhen, concat , take, mergeMap, delay, concatMap, switchMap} from 'rxjs/operators';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class TestService {
  public apiUrl: string = 'http://62.76.187.239/wialon_last_req.php';
  private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});
  public delay = 1000;
  public N = 10;

  constructor(
    private httpClient: HttpClient,
    public api: APIService,

    ) { }
  
  public request(type: string, url?: string, svc?: string, params?: Object): Observable<object> {
    if(!url) url = this.apiUrl
    if(svc) url = this.apiUrl+svc;
    let httpParams = new  HttpParams();
    if(params) httpParams = httpParams.set('params', JSON.stringify(params))
    const body = httpParams.toString().replace('+','%2b');
    return this.httpClient.request<any>(type, url).pipe(
        map(res=>{
            return res;
        }),
      );
  }

  public getLastWialonRequest() {
    return this.request('GET','http://62.76.187.239/wialon_last_req.php');
  }

  public sendLastWialonRequest(data) {
    return this.api.request('POST', 'distributions', data);
  }

  public LastWialonRequest() {
    return this.getLastWialonRequest()
    .pipe(
      tap(res=>{console.log('last wialon Event request',res)}),
      switchMap(wialonEventData=>this.sendLastWialonRequest(wialonEventData)),
      tap(res=>{console.log('Api response from /distributions',res)}),
      );
  }

  public sendCommand(imei, unitID, commandText, commandsService) {
    return this.api.request('POST', 'command', {
      imei: imei,
      unit_id: unitID,
      command_text: commandText,
      commands_service: commandsService
    });
  }

  public getCommandsMessages(imei, unitID, commandsService) {
    return this.api.request('GET', 'command/'+imei+'/'+unitID+'/'+commandsService+'/');
  }



  public testLimit(i:number = 0) {

    this.api.request('GET', 'hw_types').subscribe((res:any)=>{
      console.log(i,res);
      i++;
      if(i<=this.N) {

        setTimeout((_:any)=>{this.testLimit(i)},this.delay);
      } else {
        console.log('N exceed');
      }
    });
  }

  public testLimitParallel(i:number = 0) {
    of(0).pipe(
        switchMap(_=>this.api.request('GET', 'hw_types')),
        switchMap(_=>this.api.request('GET', 'tags')),
        switchMap(_=>this.api.request('GET', 'units')),
        switchMap(_=>this.api.request('GET', 'users')),
        switchMap(_=>this.api.request('GET', 'ugroups')),
        switchMap(_=>this.api.request('GET', 'recievers')),
        switchMap(_=>this.api.request('GET', 'hw_types')),
        switchMap(_=>this.api.request('GET', 'log')),
        switchMap(_=>this.api.request('GET', 'trash')),
        switchMap(_=>this.api.request('GET', 'users')),
        switchMap(_=>this.api.request('GET', 'drivers')),
      )
    .subscribe((res:any)=>{console.log(res)});
  }

}
