import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RaceEventService, RaceEvent } from '../services/raceevent.service';
import { APIService } from '../services/api.service';
import { ItemsService } from '../services/items.service';

@Injectable({
  providedIn: 'root'
})

export class RaceEventsService extends ItemsService {

  constructor(public api: APIService, public raceEventService: RaceEventService) {
    super(api, raceEventService); // overriding _itemService with TagService
  }

}
