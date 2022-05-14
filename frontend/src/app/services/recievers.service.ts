import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RecieverService, Reciever } from '../services/reciever.service';
import { APIService } from '../services/api.service';
import { ItemsService } from '../services/items.service';

@Injectable({
  providedIn: 'root'
})

export class RecieversService extends ItemsService {
  public app:any = null;

  constructor(public api: APIService, public recieverService: RecieverService) {
    super(api, recieverService); // overriding _itemService with userGroupService
  }

}
