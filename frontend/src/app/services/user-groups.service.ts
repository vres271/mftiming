import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserGroupService, UserGroup } from '../services/user-group.service';
import { APIService } from '../services/api.service';
import { ItemsService } from '../services/items.service';

@Injectable({
  providedIn: 'root'
})

export class UserGroupsService extends ItemsService {

  constructor(public api: APIService, public userGroupService: UserGroupService) {
    super(api, userGroupService); // overriding _itemService with userGroupService
  }

}
