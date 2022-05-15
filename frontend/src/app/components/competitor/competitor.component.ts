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
      name: ['', [Validators.required,]],
      birdthDate: ['', [Validators.required,]],
      team: ['', []],
      desc: ['', []],
    });
  }

  public onCompetitorFormSubmit() {
    this.competitor?this.saveCompetitor():this.addCompetitor();
  }

  public addCompetitor() {
    console.log(this.competitorForm)
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
}
