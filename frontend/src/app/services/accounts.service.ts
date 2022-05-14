import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AccountService, Account } from '../services/account.service';
import { APIService } from '../services/api.service';
import { ItemsService } from '../services/items.service';

@Injectable({
  providedIn: 'root'
})

export class AccountsService extends ItemsService {

  constructor(public api: APIService, public accountService: AccountService) {
    super(api, accountService); // overriding _itemService with TagService
  }

}
