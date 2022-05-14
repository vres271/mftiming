import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
//test
export class Account extends Item{
  public name: string;

  constructor(item_, public _parent) {
    super(item_,_parent);
  }

  public init(params?: any):Observable<Item> { 
    return this._parent._itemService.init(this);
  }


}

export class AccountService extends ItemService {
  
  public _itemType: string = 'accounts';
  public _item: Account;
  constructor(public api: APIService) {
    super(api)
  }

  public create(item_,parent) {
   return new Account(item_,parent)
  }

  public init(item: Item|any):Observable<any> {
    return this.api.request('POST', this._itemType+'/'+item.id, {action: 'init',item:{wtoken:item.wtoken}});
  }

}

