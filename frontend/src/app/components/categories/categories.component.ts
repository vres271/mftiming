import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  public controlsOptions = {
    clearBtn: true
  }
  public tableOptions = {
    fieldNames:[
      // 'accountId',
      // 'seasonId',
      'name',
      'ageFrom',
      'ageTo',
      // 'd',    
    ],
    fields:{
      name:{type:'link'},
    },
  };
  public itemType = 'categories';

  constructor(
    public app: AppService,
  ) { }

  ngOnInit() {
  }



}

