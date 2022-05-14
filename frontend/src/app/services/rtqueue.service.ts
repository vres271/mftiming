import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RTQueueItemService, RTQueueItem } from '../services/rtqueue-item.service';
import { APIService } from '../services/api.service';
import { ItemsService } from '../services/items.service';

@Injectable({
  providedIn: 'root'
})

export class RTQueueService extends ItemsService {
  public app:any = null;
  public _indexableProps:string[] = ['id','name','tags_id'];

  constructor(public api: APIService, public rtqueueItemService: RTQueueItemService) {
    super(api, rtqueueItemService); // overriding _itemService with TagService
  }

}
