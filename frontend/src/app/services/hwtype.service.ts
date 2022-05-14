import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class HWType extends Item{
  public nm: string;
  public uid: string;
  public hw: number;

  constructor(item_, public _parent) {
    super(item_,_parent);
  }

}

export class HWTypeService extends ItemService {
  
  public _itemType: string = 'hw_types';
  public _item: HWType;
  constructor(public api: APIService) {
    super(api)
  }

  public create(item_,parent) {
   return new HWType(item_,parent)
  }


}
