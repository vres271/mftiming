import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class Race extends Item{
  public accountId: number;
  public seasonId: number;
  public name: string;
  public from: number;
  public to: number;
  public d: number;

  constructor(item_, public _parent) {
    super(item_,_parent);
  }

}

export class RaceService extends ItemService {
  
  public _itemType: string = 'races';
  public _item: Race;
  constructor(public api: APIService) {
    super(api)
  }

  public create(item_,parent) {
   return new Race(item_,parent)
  }


}
