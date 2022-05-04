import { Component, OnInit } from '@angular/core';
import { NgxIndexedDBService } from 'ngx-indexed-db';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent implements OnInit {

  constructor(
    private dbService: NgxIndexedDBService
    ) { }

  ngOnInit(): void {
    // this.dbService
    //   .add('people', {
    //     name: `Bruce Wayne1`,
    //     email: `bruce@wayne.com`,
    //   })
    //   .subscribe((key) => {
    //     console.log('key: ', key);
    //   });    
  }

}
