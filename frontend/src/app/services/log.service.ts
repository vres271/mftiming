import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogItemService, LogItem } from '../services/log-item.service';
import { APIService } from '../services/api.service';
import { ItemsService } from '../services/items.service';

@Injectable({
  providedIn: 'root'
})

export class LogService extends ItemsService {
  public app:any = null;

  constructor(public api: APIService, public logItemService: LogItemService) {
    super(api, logItemService); // overriding _itemService with TagService
  }

}
