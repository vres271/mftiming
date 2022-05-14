import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class LStorageService extends StorageService{

  constructor() {
    super(localStorage);
  }


}
