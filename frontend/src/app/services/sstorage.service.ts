import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class SStorageService extends StorageService{

  constructor() {
    super(sessionStorage);
  }

}
