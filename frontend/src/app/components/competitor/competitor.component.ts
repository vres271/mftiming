import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { iif, of } from 'rxjs';
import { mergeMap , tap, switchMap} from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { Competitor } from '../../services/competitor.service';

@Component({
  selector: 'app-competitor',
  templateUrl: './competitor.component.html',
  styleUrls: ['./competitor.component.scss']
})
export class CompetitorComponent implements OnInit {
  public competitor: Competitor|null = null;
  public competitorForm: FormGroup;
  public importOptions: any = {
    fields:[
      {name: 'regDate', src: 0, validators: ['required']},
      {name: 'num', src: 8},
      {name: 'name1', src: 1, validators: ['required']},
      {name: 'name2', src: 2, validators: ['required']},
      {name: 'name3', src: 3, validators: []},
      {name: 'birdthDate', src: 4, validators: []},
      // {name: 'categoryId', src: 'value', value: ''},
      {name: 'categoryId', src: 5, relItems: this.app.categories, relItemsProp: 'name'},
      {name: 'team', src: 6},        
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
          this.competitor = this.app.competitors._index.id[params['competitorId']]
        }),
      )
        .subscribe(()=>{
          if(this.competitor) this.competitorForm.patchValue(this.competitor);
        })
    
  }

  public initForm(){
    this.competitorForm = this.fb.group({
      regDate: ['', [Validators.required,]],
      num: ['', []],
      name1: ['', [Validators.required,]],
      name2: ['', [Validators.required,]],
      name3: ['', [Validators.required,]],
      birdthDate: ['', [Validators.required,]],
      categoryId: ['', []],
      team: ['', []],
      desc: ['', []],
    });
  }

  public onCompetitorFormSubmit() {
    this.competitor?this.saveCompetitor():this.addCompetitor();
  }

  public addCompetitor() {
    this.app.competitors.add(this.competitorForm.value)
      .subscribe(res=>{
        let newUserId = null;
        if(res.id) newUserId = res.id;
        this.app.competitors.get()
          .subscribe(()=>{
            if(newUserId) this.router.navigate(['competitors']);
          })
      });
  }

  public saveCompetitor() {
    for(let key in this.competitorForm.value) {
      this.competitor[key] = this.competitorForm.value[key];
    }
    this.competitor.save()
     .subscribe(res=>{
        this.app.competitors.get()
          .subscribe()
        this.router.navigate(['competitors']);
     });
  }

  public importItems(items) {
    this.app.competitors.addMultiple(items)
      .subscribe(res=>{
        this.multiAddErrors = res.added.filter(item=>!item.id);
        this.app.competitors.get()
          .subscribe()
        if(this.multiAddErrors.length===0) this.router.navigate(['competitors']);
      });

  }


}
