import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-distributions',
  templateUrl: './distributions.component.html',
  styleUrls: ['./distributions.component.scss']
})
export class DistributionsComponent implements OnInit {
  public itemType = 'distributions';
  public tableOptions = {
    orderBy:['-dt']
    ,fieldNames:['dt','recieverName','tagName','tagDriverName','amount','total_limit','day_limit','total_balance','day_balance']
    ,delBtn:false
    ,indexCol:false
    ,fields:{
      recieverName:{type: 'link',path:'reciever',idName:'recievers_id'},
      tagName:{type: 'link',path:'tag',idName:'tags_id'},
      tagDriverName:{type: 'link',path:'driver',idName:'tagDriverId'},
      dt:{type: 'date'},
    }
  };

  constructor(
    public app: AppService,
  ) { }

  ngOnInit() {
  }



}

