import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class Category extends Item{

  public accountId: number;
  public seasonId: number;
  public name: string;
  public ageFrom: number;
  public ageTo: number;
  public pos: number;
  public d: string;

  constructor(item_, public _parent) {
    super(item_,_parent);
  }

}

export class CategoryService extends ItemService {
  
  public _itemType: string = 'categories';
  public _item: Category;
  constructor(public api: APIService) {
    super(api)
  }

  public create(item_,parent) {
   return new Category(item_,parent)
  }


}
