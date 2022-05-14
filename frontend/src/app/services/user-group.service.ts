import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class UserGroup extends Item{

  constructor(item_, public _parent) {
    super(item_,_parent);
   }
}

export class UserGroupService extends ItemService {
  
  public _itemType: string = 'ugroups';
  public _item: UserGroup;
  constructor(public api: APIService) {
    super(api)
  }

  public create(item_,parent) {
   return new UserGroup(item_,parent)
  }


}
