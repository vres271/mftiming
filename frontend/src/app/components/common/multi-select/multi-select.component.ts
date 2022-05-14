import { Component, OnInit , Input, ChangeDetectionStrategy} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MultiSelectComponent implements OnInit {
  @Input('form') form: FormGroup;
  @Input('controlIdKey') controlIdKey: string;
  @Input('refSvc') refSvc: any;
  @Input('item') item: any;
  @Input('refNameKeys') refNameKeys: ['string'];
  @Input('disabled') disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  public addItem(item: any) {
    if(this.disabled) return;
    let items = this.form.controls[this.controlIdKey].value.slice();
    items.push(item.id);
    this.form.controls[this.controlIdKey].setValue(items);
  }

  public removeItem(item: any) {
    if(this.disabled) return;
    let items = this.form.controls[this.controlIdKey].value.slice();
    items.splice(items.indexOf(item.id),1);
    this.form.controls[this.controlIdKey].setValue(items);
  }

  public addItems(e: any) {
    if(this.disabled) return;
    let items = this.form.controls[this.controlIdKey].value.slice();
    let options = ((elem:any)=>{return elem.options})(document.getElementById('other_items_'+this.controlIdKey));
    for(let key in options) {
      let option = options[key];
      if(option.selected) {
        items.push(1*option.value);
      }
    }
    this.form.controls[this.controlIdKey].setValue(items);
  }

  public removeItems(e: any) {
    if(this.disabled) return;
    let items = this.form.controls[this.controlIdKey].value.slice();
    let options = ((elem:any)=>{return elem.options})(document.getElementById('added_items_'+this.controlIdKey));
    for(let key in options) {
      let option = options[key];
      if(option.selected) {
        items.splice(items.indexOf(1*option.value),1);
      }
    }
    this.form.controls[this.controlIdKey].setValue(items);
  }


  public keyNames(item):string {
    let result = [];
    this.refNameKeys.forEach(keyName=>{if(item[keyName]!==undefined) result.push(item[keyName])});
    return result.join(' ');
  }

}
