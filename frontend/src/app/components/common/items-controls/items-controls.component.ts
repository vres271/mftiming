import { Component, OnInit , Input, ChangeDetectionStrategy} from '@angular/core';
import {  faBan, faFileExcel , faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { ExportAsService, ExportAsConfig } from 'ngx-export-as';

@Component({
  selector: 'app-items-controls',
  templateUrl: './items-controls.component.html',
  styleUrls: ['./items-controls.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export class ItemsControlsComponent implements OnInit {
  @Input('app') app: any;
  @Input('itemType') itemType: string;
  @Input('options') _options: any = {}
  public options: any = {
    exportBtn: true,
    clearBtn: false,
  }
  faBan = faBan;
  faFileExcel = faFileExcel;
  faTrashAlt = faTrashAlt;
  public svc: any = null;
  public addPath: string = '';
  public s: any;
  public limits: number[] = [];
  exportAsConfig: ExportAsConfig = {
    type: 'xlsx', 
    elementIdOrContent: 'items-table'
  }
  public clearDialog: boolean = false;

  constructor(private exportAsService: ExportAsService) { }

  ngOnInit() {
    for(let key in this._options) {
      this.options[key] = this._options[key];
    }
    this.svc = this.app[this.itemType];
    this.addPath = this.app.addPaths[this.itemType];
    if(this.app.state.items[this.itemType]) this.s = this.app.state.items[this.itemType];
    let _limit = 1*this.app.state.default.limit;
    this.limits = [];
    this.limits.push(_limit );
    while (_limit<=1000) {
      _limit += 1*_limit;
      this.limits.push(_limit );
    }
  }

  public resetFilter() {
    this.app.state.resetFilter(this.itemType);
  }


  public export() {
    // download the file using old school javascript method
    this.exportAsService.save(this.exportAsConfig, this.itemType).subscribe(() => {
      // save started
    });
    // get the data as base64 or json object for json type - this will be helpful in ionic or SSR
    // this.exportAsService.get(this.exportAsConfig).subscribe(content => {
    //   console.log(content);
    // });
  }

  public clear() {
    this.svc.clear().subscribe(()=>{
      this.svc.get().subscribe()
      this.clearDialog = false;
    })
  }


}
