import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError, of } from 'rxjs';
import { catchError, map, tap, retry, retryWhen, concat , take, mergeMap, delay, concatMap, switchMap} from 'rxjs/operators';
import { APIService } from '../services/api.service';
import { UnitsService } from '../services/units.service';

@Injectable({
  providedIn: 'root'
})

export class Message {
  public t: number;
  public pos: {y: number, x: number, c: number, z: number, s: number, sc: number};
  public p: any;
  public tp: string; //"ucr",
  public ca: string; //"_rfid_temp_company",
  public cn: string; //"custom_msg",
  public cp: string; //"RFIDInfo 6651865",
  public ui: number; //350070,
  public ln: any; //"",
  public lt: string; //"tcp",
  public et: number; //1583313143,
  public rt: number; //1583313144,

  constructor(item_,parent) {
    for(let key in item_) {
      this[key] = item_[key];
    }
  }

}




export class MessagesService {
  public waiting: boolean = false;
  public items: Message[] = [];

  constructor(
    public api: APIService,
    public units: UnitsService,
  ) { }

  public get(params?: any):Observable<[any]> {

    params = {
      imei: this.units._index.id[params.units_id].uid,
      units_id: params.units_id,
      service: params.service,
    }
    this.waiting = true;
    let stringParams = '';
    if(params&&typeof(params)==='object') {
      for(let key in params) {
        stringParams += '/'+params[key];
      }
    }
    return this.api.request('GET', 'messages'+stringParams)
      .pipe(
        tap((res:any)=>{
          if(res.items!==undefined) this.clearItems();
          for(var key in res.items) {
            let item = new Message(res.items[key], this);
            this.items.push(item);
          }
          this.waiting = false;
        }),
      );
  }

  public clearItems() {
    this.items = [];
  }

}
