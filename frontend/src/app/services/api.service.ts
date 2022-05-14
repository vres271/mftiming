import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpRequest, HttpParams, HttpErrorResponse  } from '@angular/common/http';
import { Observable } from 'rxjs';
import { throwError, of } from 'rxjs';
import { catchError, map, tap, retry, retryWhen, concat , take, mergeMap, delay, concatMap, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class APIService {
  public apiUrl: string = 'https://rfid-limit/api/';
  private headers = new HttpHeaders({'Content-Type': 'application/x-www-form-urlencoded'});

  constructor(private httpClient: HttpClient) {
    if(location.host!=='localhost:4200')   this.apiUrl = 'api/';
  }

  public request(type: string, svc: string, params?: Object): Observable<object> {
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
