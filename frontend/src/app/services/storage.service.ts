import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage:Storage = null;
  private _prefixKey = 'rl';

  constructor(storage:Storage) {
    this._storage = storage;
  }

  public get(key:string|number):string|object|Array<any> {
    let value = this._storage.getItem(this._prefixKey+'.'+key);
    try {value=JSON.parse(value)}
    catch (e) {return value;}      
    return value;
  }

  public set(key:string|number, value:any) {
    if(typeof value === 'object') value = JSON.stringify(value);
    return this._storage.setItem(this._prefixKey+'.'+key, value);
  }

  public remove(key:string|number) {
    this._storage.removeItem(this._prefixKey+'.'+key);
  }
  

}
