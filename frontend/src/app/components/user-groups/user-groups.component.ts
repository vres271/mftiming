import { Component, OnInit } from '@angular/core';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-user-groups',
  templateUrl: './user-groups.component.html',
  styleUrls: ['./user-groups.component.scss']
})
export class UserGroupsComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  public itemType = 'ugroups';

  constructor(
    public app: AppService,
  ) { }

  ngOnInit() {
  }


}

