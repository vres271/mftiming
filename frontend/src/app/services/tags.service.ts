import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TagService, Tag } from '../services/tag.service';
import { APIService } from '../services/api.service';
import { ItemsService } from '../services/items.service';

@Injectable({
  providedIn: 'root'
})

export class TagsService extends ItemsService {
  public app:any = null;

  constructor(public api: APIService, public tagService: TagService) {
    super(api, tagService); // overriding _itemService with TagService
  }

}
