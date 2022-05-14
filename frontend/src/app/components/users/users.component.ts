import { Component, OnInit } from '@angular/core';
import { faTrashAlt, faUserLock } from '@fortawesome/free-solid-svg-icons';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  faTrashAlt = faTrashAlt;
  faUserLock = faUserLock;
  public result: {items:any[]} = {items:[]};

  constructor(
    public app: AppService,
  ) { }

  ngOnInit() {
  }

  public getUsers() {
    this.app.users.get().subscribe();
  }

  public delUser(user) {
    user.del()
      .subscribe((res)=>{
        this.app.users.get().subscribe();
      });
  }


}
