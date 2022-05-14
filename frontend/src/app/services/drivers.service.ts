import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DriverService, Driver } from '../services/driver.service';
import { APIService } from '../services/api.service';
import { ItemsService } from '../services/items.service';

@Injectable({
  providedIn: 'root'
})

export class DriversService extends ItemsService {

  constructor(public api: APIService, public driverService: DriverService) {
    super(api, driverService); // overriding _itemService with TagService
  }

}
