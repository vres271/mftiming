import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { iif, of } from 'rxjs';
import { mergeMap , tap, switchMap} from 'rxjs/operators';
import { faCog, faCheckCircle, faFileImport } from '@fortawesome/free-solid-svg-icons';

import { AppService } from '../../services/app.service';
import { TestService } from '../../services/test.service';
import { Tag } from '../../services/tag.service';
import { MyFilterPipe } from '../../pipes/my-filter.pipe';


@Component({
  selector: 'app-tag',
  templateUrl: './tag.component.html',
  styleUrls: ['./tag.component.scss']
})
export class TagComponent implements OnInit {
  faCog = faCog;
  faCheckCircle = faCheckCircle;
  faFileImport = faFileImport;
  public tag: Tag|null = null;
  public tagForm: FormGroup;
  public filter: string = '';
  public savingResults: any = null;
  public saving: boolean = false;
  public refreshUnitsState: string = '';
  public refreshUnitsStatus: string = '';
  public total_limit: number;
  public day_limit: number;
  public total_balance: number;
  public day_balance: number;
  public importOptions: any = {fields:[
      {name: 'num', src: 1, validators: ['required','uniq']
      },
      {name: 'total_limit', src:3},
      {name: 'day_limit', src:4},
      {name: 'total_balance', src:'skip'},
      {name: 'day_balance', src:'skip'},
    ]};
  public multiAddErrors: any = [];
  public parsedItems: any = {items:[],errors:[]};

  constructor(
    public route: ActivatedRoute,
    private fb: FormBuilder,
    public app: AppService,
    public test: TestService,
    public router: Router,
  ) {}

  ngOnInit() {
    this.initForm();
    this.app.ifAppReady()
      .pipe(
        switchMap(()=>this.route.params),
        tap(params=>{
          this.tag = this.app.tags._index.id[params['tagId']]
        }),
      )
        .subscribe(()=>{
          if(this.tag) {
            this.tagForm.patchValue(this.tag);
            this.total_limit = this.tag.total_limit;
            this.day_limit = this.tag.day_limit;
            this.total_balance = this.tag.total_balance;
            this.day_balance = this.tag.day_balance;
          }
          //this.commandService  = this.app.settings.items.commands_primary_service;
        })
    
  }

  public initForm(){
    this.tagForm = this.fb.group({
      num: ['', [Validators.required,]],
      units_id: ['', [Validators.required,]],
      drivers_id: ['', [Validators.required,]],
      total_limit: ['', [Validators.required,]],
      day_limit: ['', [Validators.required,]],
      total_balance: ['', [Validators.required,]],
      day_balance: ['', [Validators.required,]],
    });
  }

  public onTagFormSubmit() {
    this.tag?this.saveTag():this.addTag();
  }

  public addTag() {
    this.app.tags.add(this.tagForm.value)
      .subscribe(res=>{
        let newId = null;
        if(res.id) newId = res.id;
        this.app.tags.get()
          .subscribe(()=>{
            if(newId) this.router.navigate(['tag/'+newId]);
          })
      });
  }

  public saveTag() {
    for(let key in this.tagForm.value) {
      this.tag[key] = this.tagForm.value[key];
    }

    this.tag.total_limit = this.total_limit;
    this.tag.day_limit = this.day_limit;
    this.tag.total_balance = this.total_balance;
    this.tag.day_balance = this.day_balance;
    delete this.tag.rtqerrors;

    this.saving = true;
    this.savingResults = null; 
    //this.tag.save({commandService: this.commandService})
    this.tag.save()
     .subscribe(res=>{
        this.savingResults = res; 
        this.saving = false;
        this.app.tags.get()
          .subscribe()
        this.router.navigate(['tags']);
     });
  }

  public changeTagValue(type:string,newValue:string) {
    this.tag.changeTagValue({type,newValue})
     .subscribe(res=>{
        this.app.tags.get()
          .pipe(tap(_=>{
            this.tag = this.app.tags._index.id[this.tag.id];
            this.tagForm.patchValue(this.tag);
            this.total_limit = this.tag.total_limit;
            this.day_limit = this.tag.day_limit;
            this.total_balance = this.tag.total_balance;
            this.day_balance = this.tag.day_balance;
          }))
          .subscribe()
     });
  }

  public retryRTTask(rtqItem) {
    this.app.rtqueue.rtqueueItemService.retry(rtqItem)
      .subscribe(res=>{
        this.app.tags.get().subscribe(_=>{
          this.tag = this.app.tags._index.id[this.tag.id];
          this.tagForm.patchValue(this.tag);
        })
      });
  }

  public cancelRTTask(rtqItem) {
    this.app.rtqueue.rtqueueItemService.setStatus(rtqItem,{status:5})
      .subscribe(res=>{
        this.app.tags.get().subscribe(_=>{
          this.tag = this.app.tags._index.id[this.tag.id];
          this.tagForm.patchValue(this.tag);
        })
      });
  }

  public importItems(items) {
    this.app.tags.addMultiple(items)
      .subscribe(res=>{
        this.multiAddErrors = res.added.filter(item=>!item.id);
        this.app.tags.get()
          .subscribe()
        if(this.multiAddErrors.length===0) this.router.navigate(['tags']);
      });

  }





}
