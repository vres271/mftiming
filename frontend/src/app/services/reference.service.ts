import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ReferenceService {

  constructor() { }

  public set(data:any) {
    for(let key in data) {
      //this[key] = data[key];
    }
  }
}
