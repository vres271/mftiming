import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {
  public contolsOptions = {
    // clearBtn: true
  }
  public tableOptions = {
    fieldNames:[
      'name',
      'go',
      'results',
      'from',
      'to',
    ],
    fields:{
      name:{type:'link'},
      go:{type:'link',path:'go/',idName:'id',staticValue:'Войти в гонку'},
      results:{type:'link',path:'results/',idName:'id',staticValue:'Результаты'},
    },
  };
  public itemType = 'races';

  constructor(
    public app: AppService,
  ) { }

  ngOnInit() {
  }



}

