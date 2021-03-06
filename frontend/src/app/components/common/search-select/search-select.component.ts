import { Component, OnInit , Input, ChangeDetectionStrategy} from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-search-select',
  templateUrl: './search-select.component.html',
  styleUrls: ['./search-select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush  
})
export class SearchSelectComponent implements OnInit {
  @Input('form') form: FormGroup;
  //@Input('control') control: FormControl;
  @Input('controlIdKey') controlIdKey: string;
  @Input('refSvc') refSvc: any;
  @Input('item') item: any;
  @Input('refNameKey') refNameKey: any;
  public result: {items:any[]} = {items:[]};

  constructor() { }

  ngOnInit() {
  }



}
