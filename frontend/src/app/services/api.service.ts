import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError, of, from } from 'rxjs';
import { catchError, map, tap, retry, retryWhen, concat , take, mergeMap, delay, concatMap, switchMap} from 'rxjs/operators';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  public apiUrl: string = 'https://rfid-limit/api/';
  private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private httpClient: HttpClient, private dbService: NgxIndexedDBService) {
    if(location.host!=='localhost:4200')   this.apiUrl = 'api/';
  }

  public request(type: string, svc: string, params?: Object): Observable<object> {

    console.log(type,svc,params);
    if(svc==='core/auth') {
      if(type==='GET') {
        return of({
          auth:true,
          ref:{},
          settings :{}  ,       
          user :{
            name:'user',
            rights:{
              items:{
                users:{r:true},
                seasons:{r:true},
                category:{r:true},
                race:{r:true},
                competitors:{r:true},
                log:{r:true},        
              },
              nav:{
                header:{
                  users: true,
                  seasons: true,
                  category: true,
                  race: true,
                  competitors: true,
                  log: true,        
                }
              }
            },
          },       
          sid :'123',       
        }).pipe(delay(1000))
      }
    } else if (svc==='users') {
      if(type==='GET') {

      return from(this.dbService.getAll('users'))
        .pipe(
          map(res=>({items:res}))
        );


        // return of({
        //   items:[{id:1,name:'user1'}]
        // })
      }
    }
    const url = this.apiUrl+svc;
    let httpParams = new  HttpParams();
    if(params) httpParams = httpParams.set('params', JSON.stringify(params))
    const body = httpParams.toString().replace('+','%2b');
    return this.httpClient.request<any>(type, url, {body, headers: this.headers, withCredentials: true }).pipe(
        map(res=>{
            return res;
        }),
        catchError(this.errorHandler)
      );
  }

  public errorHandler(error: any) {
    if(error.status===401) {
      let checkAuthError: Event = new Event('coreCheckAuthError');
      document.dispatchEvent(checkAuthError);
    }
    return of(error);
  }


}
