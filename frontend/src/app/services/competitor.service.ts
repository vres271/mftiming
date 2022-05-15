import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class Competitor extends Item{
  public name: string;
  public birdthDate: number;
  public team: string;
  public desc: string;
  public d: number;

  constructor(item_, public _parent) {
    super(item_,_parent);
  }

}

export class CompetitorService extends ItemService {
  
  public _itemType: string = 'competitors';
  public _item: Competitor;
  constructor(public api: APIService) {
    super(api)
  }

  public create(item_,parent) {
   return new Competitor(item_,parent)
  }


}
