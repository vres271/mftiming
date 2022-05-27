import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { iif, of } from 'rxjs';
import { mergeMap , tap, switchMap} from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { Race } from '../../services/race.service';

@Component({
  selector: 'app-race',
  templateUrl: './race.component.html',
  styleUrls: ['./race.component.scss']
})
export class RaceComponent implements OnInit {
  public race: Race|null = null;
  public itemForm: FormGroup;

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
          this.race = this.app.races._index.id[params['raceId']]
        }),
      )
        .subscribe(()=>{
          if(this.race) this.itemForm.patchValue(this.race);
        })
    
  }

  public initForm(){
    this.itemForm = this.fb.group({
      seasonId: ['', []],
      name: ['', [Validators.required]],
      from: ['', [Validators.required,]],
      to: ['', [Validators.required,]],
    });
  }

  public onItemFormSubmit() {
    this.race?this.saveRace():this.addRace();
  }

  public addRace() {
    console.log(this.itemForm)
    this.app.races.add(this.itemForm.value)
      .subscribe(res=>{
        let newItemId = null;
        if(res.id) newItemId = res.id;
        this.app.races.get()
          .subscribe(()=>{
            if(newItemId) this.router.navigate(['races']);
          })
      });
  }

  public saveRace() {
    for(let key in this.itemForm.value) {
      this.race[key] = this.itemForm.value[key];
    }
    this.race.save()
     .subscribe(res=>{
        this.app.races.get()
          .subscribe()
        this.router.navigate(['races']);
     });
  }


}
