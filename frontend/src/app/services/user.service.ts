import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class User extends Item{
  // public ugroups_id:number;
  public root:boolean;
  public name:string;
  public email:string;
  public d:number=0;
  // public password:string;

  constructor(item_, public _parent) {
    super(item_,_parent);
   }



}

export class UserService extends ItemService {
  public _itemType: string = 'users';
  public _item: User;
  constructor(public api: APIService) {
    super(api)
  }

  public create(item_,parent) {
   return new User(item_,parent)
  }


}
