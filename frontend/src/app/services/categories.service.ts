import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CategoryService, Category } from '../services/category.service';
import { APIService } from '../services/api.service';
import { ItemsService } from '../services/items.service';

@Injectable({
  providedIn: 'root'
})

export class CategoriesService extends ItemsService {

  constructor(public api: APIService, public competitorService: CategoryService) {
    super(api, competitorService); // overriding _itemService with TagService
  }

}
