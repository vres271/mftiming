import { Component, OnInit , Input, AfterViewInit, ChangeDetectionStrategy} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { fromEvent} from 'rxjs';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-input-tree',
  templateUrl: './input-tree.component.html',
  styleUrls: ['./input-tree.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InputTreeComponent implements OnInit , AfterViewInit {
  @Input('form') form: FormGroup;
  @Input('controlIdKey') controlIdKey: string;
  @Input('sourceTree') sourceTree: any;
  @Input('item') item: any;
  public updateEvent: Event = new Event('treeUpdated');
  public translateData: any = {};

  constructor(public translate: TranslateService) { }

  ngOnInit() {
    //fromEvent(document, 'treeUpdated').subscribe(_=>{this.initRightsTree(this.item);});
    this.translate.get('INPUT-TREE').subscribe((res: object) => {this.translateData = res;});
    this.translate.get('types').subscribe((res: object) => {
      for(let key in res) {
        this.translateData[key] = res[key];
      }
    });
  }

  ngAfterViewInit() {
    this.initRightsTree(this.item);
  }

  public initRightsTree(item:any|undefined|null) {
    let cnt = document.getElementById('input_tree_'+this.controlIdKey);
    cnt&&(cnt.innerHTML = '');


    let setCheckboxView = (checkbox, value)=>{
      if(value===1||value===true) {
        checkbox.checked = true;
        checkbox.className = 'true';
      } else if (value===0||value===false) {
        checkbox.checked = false;
        checkbox.className = 'false';
      } else if (value===null||value===undefined) {
        checkbox.checked = false;
        checkbox.className = 'null';
      }
    }

    let switchCheckbox = (checkbox, value)=>{
      if(value===1||value===true) {
        value = 0;
      } else if (value===0||value===false) {
        value = null;
      } else if (value===null||value===undefined) {
        value = 1;
      }
      setCheckboxView(checkbox, value);
      return value;
    }

    let goDeeper = (compiledObject, valuesObject, parentEelem, level, parentObject,key)=>{
      if (compiledObject&&(typeof(compiledObject)==='object')) {
        for(let key in compiledObject)  {
          let elem:any = document.createElement('div');
          if(typeof(compiledObject[key])==='object') {
            if(valuesObject&&!valuesObject[key]) valuesObject[key]={};
            let span = document.createElement('span');
            let text = document.createTextNode(this.translateData[key]?this.translateData[key]:key);
            span.appendChild(text);
            span.className = 'branch-header';
            elem._childrenChecked = 0;
            span.onclick = ()=>{
              let childrenDivs = elem.children;
              for(let key1 in childrenDivs) {
                if(childrenDivs[key1].children&&childrenDivs[key1].children[0]&&childrenDivs[key1].children[0].children[0]) {
                  let checkbox:any = childrenDivs[key1].children[0].children[0];
                  if(checkbox.type==='checkbox' && !checkbox.disabled) {
                    checkbox.checked = 1*elem._childrenChecked;
                    checkbox.onchange();
                  }
                }
              }
              elem._childrenChecked = !elem._childrenChecked;
            }
            parentEelem.appendChild(span);
          } else {
            elem.className = 'inline';
          }
          parentEelem.appendChild(elem);
          goDeeper(compiledObject[key],valuesObject[key],elem,level+1,valuesObject,key);
        }
      } else {
        let label = document.createElement('label');
        let text = document.createTextNode(this.translateData[key]?this.translateData[key]:key);
        let checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        label.appendChild(checkbox);
        label.appendChild(text);
        parentEelem.appendChild(label);

        if(compiledObject===0) {
          checkbox.disabled = true;
          label.className = 'disabled';
          //label.style.color = 'red';
        } else {
          setCheckboxView(checkbox,valuesObject);
          checkbox.onchange = (e:Event)=>{
            valuesObject = switchCheckbox(checkbox,valuesObject);
            parentObject[key] = valuesObject;
            this.form.controls[this.controlIdKey].setValue(item[this.controlIdKey]);
            if(e) {
              e.stopPropagation();
              e.preventDefault();
            }
            return false;
          };
        }
      }
    }
    if(!item[this.controlIdKey]) item[this.controlIdKey] = {};
    this.form.controls['rights'].setValue(item[this.controlIdKey]);
    goDeeper(this.sourceTree,item[this.controlIdKey],cnt,0,item[this.controlIdKey],'');
    
  }


}
