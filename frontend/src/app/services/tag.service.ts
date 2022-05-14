import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ItemService, Item } from '../services/item.service';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})

export class Tag extends Item{
  public num: number;
  public units_id: number;
  public drivers_id: number;
  //public day_limit_default: number;
  public total_limit: number;
  public day_limit: number;
  public total_balance: number;
  public day_balance: number;
  //public type: number;
  public recievers: [number];
  public rtqerrors: [any];

  constructor(item_, public _parent) {
    super(item_,_parent);
  }

  public sendCommand():Observable<any> {
    return this._parent._itemService.sendCommand(this);
  }

  public getUnits():Observable<any> {
    return this._parent.getUnits(this);
  }

  public get name() : string {
    return '#'+this.id+' '+this.num+(this.unitNm&&(' : '+this.unitNm));
  }

  public get fullNname() : string {
    return '#'+this.id+' : '+this.num+(this.unitNm?(' : '+this.unitNm):'')+(this.driverName?(' : '+this.driverName):'');
  }

  public get unitNm() : string {
    return (this._parent.app&&this._parent.app.units._index&&this._parent.app.units._index.id&&this._parent.app.units._index.id[this.units_id])?this._parent.app.units._index.id[this.units_id].nm:'';
  }

  public get driverName() : string {
    return (this._parent.app&&this._parent.app.drivers._index&&this._parent.app.drivers._index.id&&this._parent.app.drivers._index.id[this.drivers_id])?this._parent.app.drivers._index.id[this.drivers_id].shortName:'';
  }

  public save(params?:any):Observable<Item> { 
    return this._parent._itemService.save(this, params);
  }

  public changeTagValue(params?:any):Observable<Item> {
    return this._parent._itemService.changeTagValue(this, params);
  }

  public get recieverUnitNames() : string {
    return this.recievers.map(id=>(this._parent.app&&this._parent.app.recievers._index&&this._parent.app.recievers._index.id&&this._parent.app.recievers._index.id[id])?this._parent.app.recievers._index.id[id].unitNm:'').toString();
  }

  public get recieverUnitNamesArray() : Array<string> {
    return this.recievers.map(id=>(this._parent.app&&this._parent.app.recievers._index&&this._parent.app.recievers._index.id&&this._parent.app.recievers._index.id[id])?this._parent.app.recievers._index.id[id].unitNm:'');
  }

  public get shortRecieverUnitNames() : string {
    return this.recievers.map(id=>('#'+id)).toString();
  }


}

export class TagService extends ItemService {
  
  public _itemType: string = 'tags';
  public _item: Tag;
  constructor(public api: APIService) {
    super(api)
  }

  public create(item_,parent) {
   return new Tag(item_,parent)
  }

  public save(item: Item, params?:any):Observable<any> {
    //return this.api.request('PUT', this._itemType+'/'+item.id+(params&&params.commandService?('/'+params.commandService):''), item.values);
    return this.api.request('PUT', this._itemType+'/'+item.id, item.values);
  }

  public changeTagValue(item: Item, params?:any):Observable<any> {
    return this.api.request('PUT', this._itemType+'/'+item.id+'/'+params.type, params.newValue);
  }

  public sendCommand(item: Tag):Observable<any> {
    return this.api.request('PATCH', this._itemType+'/'+item.id, {
      num: item.num,
      units_id: item.units_id,
      total_limit: item.total_limit,
      day_limit: item.day_limit,
    });
  }

  public getUnits(item: Item):Observable<any> {
    return this.api.request('GET', 'units');
  }

}
