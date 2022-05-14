import { Component, OnInit , Input} from '@angular/core';
import { faTrashAlt, faListAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsTableComponent implements OnInit {
  @Input('app') app: any;
  @Input('itemType') itemType: string;
  @Input('options') _options: {
    orderBy: string[],
    fieldNames: string[],
    logLink:boolean,
    delBtn:boolean,
    indexCol:boolean,
    fields: any
  }
  @Input('result') result: {items:any[]} = {items:[]};
  faTrashAlt = faTrashAlt;
  faListAlt = faListAlt;
  public svc: any = null;
  public editPath: string = '';
  public s: any;
  public options = {
    orderBy:null,
    fieldNames:['name'],
    logLink:false,
    delBtn:true,
    indexCol:true,
    fields: {name: {type:'link'}}
  };
  constructor() { }

  ngOnInit() {
    this.svc = this.app[this.itemType];
    this.editPath = this.app.addPaths[this.itemType];
    this.s = this.app.state.items[this.itemType];
    for(let key in this._options) {
      this.options[key] = this._options[key];
    }
  }

  public del(item) {
    item.del()
      .subscribe((res)=>{
        this.svc.get().subscribe();
      });
  }

  public linkPath(item:any, fieldName: string) {
    return this.options.fields&&this.options.fields[fieldName].path?this.options.fields&&('/'+this.options.fields[fieldName].path+'/'+item[this.options.fields[fieldName].idName]):('/'+this.editPath+'/'+item.id)
  }


}
