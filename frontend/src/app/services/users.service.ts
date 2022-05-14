import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService, User } from '../services/user.service';
import { APIService } from '../services/api.service';
import { ItemsService } from '../services/items.service';

@Injectable({
  providedIn: 'root'
})

export class UsersService extends ItemsService {

  constructor(public api: APIService, public userService: UserService) {
    super(api, userService); // overriding _itemService with userService
  }

}
