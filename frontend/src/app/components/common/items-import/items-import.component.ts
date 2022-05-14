import { Component, OnInit, Input, Output,EventEmitter,ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-items-import',
  templateUrl: './items-import.component.html',
  styleUrls: ['./items-import.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsImportComponent implements OnInit {
  @Input('app') app: any;
  @Input('itemType') itemType: string;
  @Input('options') options: any;
  @Output('parse') onParse: EventEmitter<{items:any[],errors:[any]}> = new EventEmitter<{items:any[],errors:[any]}>();

  //public srcData:string = 'RFIDset 2787810,0,0,0\nRFIDset 2787811,0,0,0\nRFIDset 2787812,0,0,0\nRFIDset 2787813,0,0,0\nRFIDset 2787814,0,0,0\nRFIDset 2787815,0,0,0\nRFIDset 2787816,0,0,0\nRFIDset 2787817,0,0,0\nRFIDset 2787818,0,0,0\nRFIDset 2787819,0,0,0';
  public srcData:string = '';
  public parsedItems:any = [];
  public delitmer:string = '';
  public errors:any = [];
  public validators:any = {
    required:(value, key, items, index)=>{
        if(!value) return {class:'danger',msg: 'empty value',type:'error'};
    },
    uniq:(value, key, items, index)=>{
      if(value) {
        if(index[key]&&index[key][value]) {
          return {class:'danger',msg: 'value not uniq',type:'error'};
        }
      }
    },
  };

  constructor() { }

  ngOnInit() {
    //this.parseSrcData();
  }

  public parseSrcData() {
    let index = {};
    this.errors = [];

    this.parsedItems = this.srcData.split(/[\n\r]/).map((row,i)=>{
      let arr = row.split(new RegExp(this.delitmer?this.delitmer:/[\t\s,;]/));
      let item = {_state:{}};
      for(let  key in this.options.fields) {
        let field = this.options.fields[key];
        if(field.src==='value') {
          if(field.value!==undefined) item[field.name] = field.value.trim()
        } else if (field.src!=='skip') {
          if(arr[field.src]!==undefined) item[field.name] = arr[field.src].trim();
        }
        if(field.validators) {
          for(let vkey in field.validators) {
            let validator = field.validators[vkey];
            let validatorFunc = null;
            if(typeof validator === 'function') {
              validatorFunc = validator;
            } else if(typeof validator === 'string' && this.validators[validator]) {
              validatorFunc = this.validators[validator];
            }
            if(validatorFunc) {
              let result = validatorFunc(item[field.name], field.name, this.parsedItems, index); 
              if(result) {
                item._state[field.name] = result;
                if(result.type&&result.type==='error') {
                  this.errors.push({result:result,row:i+1,fieldName:field.name})
                }
              };
            }
          }
        }
        if(item[field.name]!==undefined && item[field.name]!=='') {
          if(index[field.name]===undefined) index[field.name]={};
          index[field.name][item[field.name]] = item;
        }
      }
      return item;
    }).filter(item=>JSON.stringify(item)!=='{}');
    let items = [];
    for(let ckey in this.parsedItems) {
      let copy = Object.assign({}, this.parsedItems[ckey]);
      delete copy._state; items.push(copy);
    };
    this.onParse.emit({items:items,errors:this.errors});
  }

  public notSkypped(items) {
    return items.filter(item=>(item.src!=='skip'));
  }
}


