import { Component, OnInit , Input} from '@angular/core';
import { faTrashAlt, faListAlt } from '@fortawesome/free-solid-svg-icons';
import { ItemsService } from '../../../services/items.service';

@Component({
  selector: 'app-items-table',
  templateUrl: './items-table.component.html',
  styleUrls: ['./items-table.component.scss'],
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsTableComponent implements OnInit {
  @Input('app') app: any;
  @Input('itemType') itemType: string = '';
  @Input('options') _options?: {
    orderBy: string[],
    fieldNames: string[],
    logLink:boolean,
    delBtn:boolean,
    indexCol:boolean,
    fields: any
  };
  @Input('result') result: {items:any[]} = {items:[]};
  faTrashAlt = faTrashAlt;
  faListAlt = faListAlt;
  public svc?: ItemsService;
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
  public item:any;
  
  constructor() { }

  ngOnInit() {
    this.svc = this.app[this.itemType];
    this.editPath = this.app.addPaths[this.itemType];
    this.s = this.app.state.items[this.itemType];
    let _s:any = this;
    for(let key in _s._options) {
      _s.options[key] = _s._options[key];
    }
  }

  public del(item:any) {
    item.del()
      .subscribe((res:any)=>{
        this.svc.get().subscribe();
      });
  }

  public linkPath(item:any, fieldName: string) {
    let _s:any = this;
    return this.options.fields&&_s.options.fields[fieldName].path?this.options.fields&&('/'+_s.options.fields[fieldName].path+'/'+item[_s.options.fields[fieldName].idName]):('/'+this.editPath+'/'+item.id)
  }


}
