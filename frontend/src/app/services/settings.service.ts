import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIService } from '../services/api.service';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public items: any;

  constructor(public api: APIService) { }

  public set(data) {
    this.items = data;
  }

  public save():Observable<any> {
    return this.api.request('PUT', 'settings', this.items);
  }

}
