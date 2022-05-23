import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class Competitor extends Item{
  public accountId: number;
  public regDate: number;
  public num: number;
  public name1: string;
  public name2: string;
  public name3: string;
  public birdthDate: number;
  public categoryId: number;
  public team: string;
  public desc: string;
  public d: string;



  constructor(item_, public _parent) {
    super(item_,_parent);
  }

  public get fullName() : string {
    return this.name1+' '+this.name2+' '+this.name3;
  }

  public get categoryName() : string {
    return (this._parent.app&&this._parent.app.categories._index&&this._parent.app.categories._index.id&&this._parent.app.categories._index.id[this.categoryId])?this._parent.app.categories._index.id[this.categoryId].name:'';
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
