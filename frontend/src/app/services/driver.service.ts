import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class Driver extends Item{
  public name1: string;
  public name2: string;
  public name3: string;

  constructor(item_, public _parent) {
    super(item_,_parent);
  }

  public get shortName() : string {
    return this.name1+' '+(this.name2&&(this.name2[0]+'. '))+(this.name3&&(this.name3[0]+'.'));
  }

  public get name() : string {
    return this.name1+(this.name2&&(' '+this.name2))+(this.name3&&(' '+this.name3));
  }


}

export class DriverService extends ItemService {
  
  public _itemType: string = 'drivers';
  public _item: Driver;
  constructor(public api: APIService) {
    super(api)
  }

  public create(item_,parent) {
   return new Driver(item_,parent)
  }


}
