import { APIService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-competitors',
  templateUrl: './competitors.component.html',
  styleUrls: ['./competitors.component.scss']
})
export class CompetitorsComponent implements OnInit {
  faFileExport = faFileExport
  public controlsOptions = {
    clearBtn: true
  }
  public tableOptions = {
    fieldNames:[
      'regDate',
      'num',
      'fullName',
      'birdthDate',
      'categoryName',
      'team',
      'desc',
      'toJSON',
    ],
    fields:{
      num:{type:'edit'},
      fullName:{type:'link'},
      toJSON:{
        type:'icon',
        icon:faFileExport,
        idName:'id', 
        expr: ()=>true, 
        classes: 'pointer grey', 
        title:'Забэкапить в JSON',
        onclick:()=>{
          console.log(this.app.competitors.items
            .map(item=>(''+
              "  "+ item.id
              +"  "+ item.num
              +"  "+ item.name1
              +"  "+ item.name2
              +"  "+ item.name3
              +"  "+ item.birdthDate
              +"  "+ item.categoryName
              ))
            )
          this.api.request('GET', 'competitors')
            .subscribe(res=>{console.log(res)})
        },
      },    
    },
  };
  public itemType = 'competitors';

  constructor(
    public app: AppService,
    public api: APIService,
  ) { }

  ngOnInit() {
  }



}

