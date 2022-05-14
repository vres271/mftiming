import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class User extends Item{
  public ugroups_id:number;
  public password:string;
  public name1:string;
  public name2:string;
  public name3:string;
  public email:string;
  public phone:string;
  public rights?:object;

  constructor(item_, public _parent) {
    super(item_,_parent);
   }

  public get ugroupName() : string {
    return (this._parent.app&&this._parent.app.ugroups._index&&this._parent.app.ugroups._index.id&&this._parent.app.ugroups._index.id[this.ugroups_id])?this._parent.app.ugroups._index.id[this.ugroups_id].name:'';
  }

  public get shortName() : string {
    return this.name1+' '+(this.name2&&(this.name2[0]+'. '))+(this.name3&&(this.name3[0]+'.'));
  }

  public get fullName() : string {
    return this.name1+(this.name2&&(' '+this.name2))+(this.name3&&(' '+this.name3));
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
