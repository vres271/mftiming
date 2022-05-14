import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DistributionService, Distribution } from '../services/distribution.service';
import { APIService } from '../services/api.service';
import { ItemsService } from '../services/items.service';

@Injectable({
  providedIn: 'root'
})

export class DistributionsService extends ItemsService {

  constructor(public api: APIService, public distributionService: DistributionService) {
    super(api, distributionService); // overriding _itemService with TagService
  }

}
