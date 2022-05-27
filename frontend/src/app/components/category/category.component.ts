import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { iif, of } from 'rxjs';
import { mergeMap , tap, switchMap} from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { Category } from '../../services/category.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  public category: Category|null = null;
  public itemForm: FormGroup;
  public importOptions: any = {
    fields:[
      {name: 'seasonId', src: 'value', value: '1', validators: ['required']},
      {name: 'name', src: 0, validators: ['required']},
      {name: 'ageFrom', src: 'value', value: '0', validators: ['required']},
      {name: 'ageTo', src: 'value', value: '0', validators: ['required']},
    ],
    delitmer: '\\t',
  };
  public multiAddErrors: any = [];
  public parsedItems: any = {items:[],errors:[]};

  constructor(
    public route: ActivatedRoute,
    private fb: FormBuilder,
    public app: AppService,
    public router: Router,

  ) { }

  ngOnInit() {
    this.initForm();
    this.app.ifAppReady()
      .pipe(
        switchMap(()=>this.route.params),
        tap(params=>{
          this.category = this.app.categories._index.id[params['categoryId']]
        }),
      )
        .subscribe(()=>{
          if(this.category) this.itemForm.patchValue(this.category);
        })
    
  }

  public initForm(){
    this.itemForm = this.fb.group({
      seasonId: ['', []],
      name: ['', [Validators.required]],
      ageFrom: ['', [Validators.required,]],
      ageTo: ['', [Validators.required,]],
    });
  }

  public onItemFormSubmit() {
    this.category?this.saveCategory():this.addCategory();
  }

  public addCategory() {
    console.log(this.itemForm)
    this.app.categories.add(this.itemForm.value)
      .subscribe(res=>{
        let newItemId = null;
        if(res.id) newItemId = res.id;
        this.app.categories.get()
          .subscribe(()=>{
            if(newItemId) this.router.navigate(['categories']);
          })
      });
  }

  public saveCategory() {
    for(let key in this.itemForm.value) {
      this.category[key] = this.itemForm.value[key];
    }
    this.category.save()
     .subscribe(res=>{
        this.app.categories.get()
          .subscribe()
        this.router.navigate(['categories']);
     });
  }

  public importItems(items) {
    this.app.categories.addMultiple(items)
      .subscribe(res=>{
        this.multiAddErrors = res.added.filter(item=>!item.id);
        this.app.categories.get()
          .subscribe()
        if(this.multiAddErrors.length===0) this.router.navigate(['categories']);
      });

  }

}
