import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { EventService, Event } from '../services/event.service';
import { APIService } from '../services/api.service';
import { ItemsService } from '../services/items.service';

@Injectable({
  providedIn: 'root'
})

export class EventsService extends ItemsService {

  constructor(public api: APIService, public eventService: EventService) {
    super(api, eventService); // overriding _itemService with TagService
  }

}
