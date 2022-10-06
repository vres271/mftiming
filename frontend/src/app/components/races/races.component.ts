import { APIService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-races',
  templateUrl: './races.component.html',
  styleUrls: ['./races.component.scss']
})
export class RacesComponent implements OnInit {
  faFileExport = faFileExport
  public contolsOptions = {
    // clearBtn: true
  }
  public tableOptions = {
    fieldNames:[
      'name',
      'go',
      'results',
      'toJSON',
      // 'from',
      // 'to',
    ],
    fields:{
      name:{type:'link'},
      go:{type:'link',path:'go/',idName:'id',staticValue:'Войти в гонку'},
      results:{type:'link',path:'results/',idName:'id',staticValue:'Результаты'},
      toJSON:{
        type:'icon',
        icon:faFileExport,
        idName:'id', 
        expr: ()=>true, 
        classes: 'pointer grey', 
        title:'Забэкапить в JSON',
        onclick:(raceItem)=>{
          console.log(this.app.raceevents.items
            .filter(item=>1*item.raceId===1*raceItem.id)
            .sort((a,b)=>(a.t-b.t))
            .map(item=>(''+
              "  "+ item.id
              +"  "+ item.datetime
              +"  "+ item.competitorNum
              +"  "+ item.competitorName
              +"  "+ item.categoryName
              ))
            )
          this.api.request('GET', 'raceevents')
            .subscribe(res=>{console.log(res)})
        },
      },
    },
  };
  public itemType = 'races';

  constructor(
    public app: AppService,
    public api: APIService,
  ) { }

  ngOnInit() {
  }



}

