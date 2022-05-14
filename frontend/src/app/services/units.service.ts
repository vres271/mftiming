import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UnitService, Unit } from '../services/unit.service';
import { APIService } from '../services/api.service';
import { ItemsService } from '../services/items.service';

@Injectable({
  providedIn: 'root'
})

export class UnitsService extends ItemsService {

  constructor(public api: APIService, public unitService: UnitService) {
    super(api, unitService); // overriding _itemService with TagService
  }

}
