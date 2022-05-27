import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { RaceService, Race } from '../services/race.service';
import { APIService } from '../services/api.service';
import { ItemsService } from '../services/items.service';

@Injectable({
  providedIn: 'root'
})

export class RacesService extends ItemsService {

  constructor(public api: APIService, public raceService: RaceService) {
    super(api, raceService); // overriding _itemService with TagService
  }

}
