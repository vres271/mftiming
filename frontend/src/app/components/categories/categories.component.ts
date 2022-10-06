import { APIService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { faFileExport } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  faFileExport = faFileExport
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
      'pos',
      'toJSON',
      // 'd',    
    ],
    fields:{
      name:{type:'link'},
      toJSON:{
        type:'icon',
        icon:faFileExport,
        idName:'id', 
        expr: ()=>true, 
        classes: 'pointer grey', 
        title:'Забэкапить в JSON',
        onclick:()=>{
          console.log(this.app.categories.items
            .map(item=>(''+
              "  "+ item.id
              +"  "+ item.name
              +"  "+ item.ageFrom
              +"  "+ item.ageTo
              ))
            )
          this.api.request('GET', 'categories')
            .subscribe(res=>{console.log(res)})
        },
      },    
    },
  };
  public itemType = 'categories';

  constructor(
    public app: AppService,
    public api: APIService,
  ) { }

  ngOnInit() {
  }



}

