import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { throwError, of } from 'rxjs';
import { catchError, map, tap, retry, retryWhen, concat , take, mergeMap, delay, concatMap, switchMap} from 'rxjs/operators';
import { APIService } from '../services/api.service';
import { UnitsService } from '../services/units.service';

@Injectable({
  providedIn: 'root'
})
export class CommandsService {
  public sending: boolean = false;

  constructor(
    public api: APIService,
    public units: UnitsService,
    ) { }

  public send(params:{units_id:number,text:string,service:string}) {
    this.sending = true;
    return this.api.request('POST', 'command', {
      imei: this.units._index.id[params.units_id].uid,
      unit_id: params.units_id,
      command_text: params.text,
      commands_service: params.service
    }).pipe(tap(_=>{this.sending = false}));
  }


}
