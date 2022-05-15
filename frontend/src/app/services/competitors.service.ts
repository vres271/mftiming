import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompetitorService, Competitor } from '../services/competitor.service';
import { APIService } from '../services/api.service';
import { ItemsService } from '../services/items.service';

@Injectable({
  providedIn: 'root'
})

export class CompetitorsService extends ItemsService {

  constructor(public api: APIService, public competitorService: CompetitorService) {
    super(api, competitorService); // overriding _itemService with TagService
  }

}
