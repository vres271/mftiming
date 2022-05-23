import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.scss']
})
export class CompetitorsComponent implements OnInit {
  public tableOptions = {
    fieldNames:[
      'regDate',
      'num',
      'fullName',
      'birdthDate',
      'categoryName',
      'team',
      'desc',
    ],
    fields:{
      fullName:{type:'link'},
    },
  };
  public itemType = 'competitors';

  constructor(
    public app: AppService,
  ) { }

  ngOnInit() {
  }



}

