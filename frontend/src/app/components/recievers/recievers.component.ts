import { Component, OnInit } from '@angular/core';
import {  faListAlt } from '@fortawesome/free-solid-svg-icons';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-recievers',
  templateUrl: './recievers.component.html',
  styleUrls: ['./recievers.component.scss']
})
export class RecieversComponent implements OnInit {
  faListAlt = faListAlt;
  public tableOptions = {
    fieldNames:['name','unitHwName','unitUid','tagNums','tz','k']
    ,logLink:true, 
    fields:{
      name:{type:'link'},
      tagNums:{
        type: 'large',
        shortName: 'shortTagNums',
      }
    }
  };
  public itemType = 'recievers';

  constructor(
    public app: AppService,
  ) { }

  ngOnInit() {
  }


}
