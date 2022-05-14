import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  public itemType = 'accounts';
  public tableOptions = {
    delBtn:false
  };
  constructor(
    public app: AppService,
  ) { }

  ngOnInit() {
  }



}
