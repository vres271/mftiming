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

  public request(type: string, svc: string, params?: any): Observable<object> {

    //console.log(type,svc,params);
    const arr = svc.split('/');
    svc = arr[0];
    const getParams = arr.splice(1);
    if(svc==='core') {
      if(type==='GET' && getParams[0]==='auth') {
        return of({
          auth:true,
          ref:{},
          settings :{}  ,       
          user :{
            root:true,
            name:'user',
            rights:{
              items:{
                users:{r:true,m:true,a:true,d:true},
                seasons:{r:true,m:true,a:true,d:true},
                category:{r:true,m:true,a:true,d:true},
                race:{r:true,m:true,a:true,d:true},
                competitors:{r:true,m:true,a:true,d:true},
                log:{r:true,m:true,a:true,d:true},        
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
    } else if (svc==='users'||svc==='log'||svc==='competitors') {
      if(type==='GET') {
        if(!getParams[0]) {
          return from(this.dbService.getAll(svc))
            .pipe(
              map(res=>({items:res.filter((item:any)=>!item.d)})),
              //tap(v=>console.log(v))
            );
          } else {
            const id=Number(getParams[0]);
            return from(this.dbService.getByKey(svc, id))
              .pipe(
                //tap(v=>console.log(v)),
                map(res=>({item:res})),
              );
          }

      } else if(type==='PUT') {
        if(!getParams[0]) {
          } else {
            const id=Number(getParams[0]);
            return from(this.dbService.update(svc, params))
              .pipe(
                map(res=>({item:res}))
              );
          }

      } else if(type==='POST') {
        if(!getParams[0]) {
            return from(this.dbService.add(svc, params))
              .pipe(
                map(res=>({id:res}))
              );
          } else if (getParams[0]==='multiple') {
            params.forEach(item=>{
              return from(this.dbService.add(svc, item))
                .subscribe()              
            })
            return of({added: params.map(item=>({id:123}))})
          }

      } else if(type==='DELETE') {
        if(getParams[0]) {
          const id=Number(getParams[0]);
          return from(this.dbService.getByKey(svc, id))
            .pipe(
              map((item:any)=>{item.d = Math.round(new Date().getTime()/1000); return item}),
              switchMap((item:any)=>from(this.dbService.update(svc, item))),
              map(res=>({deleted:true})),
            )
        }
      }
    }

    return of({});

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
