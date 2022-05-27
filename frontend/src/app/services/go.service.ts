import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';
import { Race } from '../services/race.service';

@Injectable({
  providedIn: 'root'
})

export class GoService {
  public race: Race|null = null;
  public t: number = (new Date()).getTime();
  public tIntervalId: any = 0;

  constructor() {
    this.tIntervalId = setInterval(()=>{
      this.t = (new Date()).getTime();
    },10)
  }


}

