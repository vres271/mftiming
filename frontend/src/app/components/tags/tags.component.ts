import { Component, OnInit } from '@angular/core';
import {  faListAlt, faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.scss']
})
export class TagsComponent implements OnInit {
  faListAlt = faListAlt;
  faExclamationTriangle = faExclamationTriangle;
  public tableOptions = {
    fieldNames:['rtqerrors','num','unitNm','driverName','recieverUnitNames','total_limit','day_limit','total_balance','day_balance'],
    logLink:true, 
    fields:{
      num:{type: 'link'},
      rtqerrors:{
        type: 'icon',
        icon:faExclamationTriangle,
        title:'Errors in RTQueue',
        classes: 'text-danger',
        expr:(item)=>(item.rtqerrors&&item.rtqerrors.length>0),
        badge:{
          class: 'secondary',
          expr:(item)=>item.rtqerrors&&item.rtqerrors.length,
        },
      },
      driverName:{
        type: 'link',
        path:'driver',
        idName:'drivers_id',
      },
      recieverUnitNames:{
        type: 'large',
        shortName: 'shortRecieverUnitNames',
      }
    }
  };
  public itemType = 'tags';

  constructor(
    public app: AppService,
  ) {}

  ngOnInit() {
    //console.log(this.app.rtqueue)
  }


}
