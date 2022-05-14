import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HWTypeService, HWType } from '../services/hwtype.service';
import { APIService } from '../services/api.service';
import { ItemsService } from '../services/items.service';

@Injectable({
  providedIn: 'root'
})

export class HWTypesService extends ItemsService {

  constructor(public api: APIService, public hwtypeService: HWTypeService) {
    super(api, hwtypeService); // overriding _itemService with TagService
  }

}
