import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { iif, of } from 'rxjs';
import { mergeMap , tap, switchMap} from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { Driver } from '../../services/driver.service';

@Component({
  selector: 'app-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.scss']
})
export class DriverComponent implements OnInit {
  public driver: Driver|null = null;
  public driverForm: FormGroup;


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
          this.driver = this.app.drivers._index.id[params['driverId']]
        }),
      )
        .subscribe(()=>{
          if(this.driver) this.driverForm.patchValue(this.driver);
        })
    
  }

  public initForm(){
    this.driverForm = this.fb.group({
      name1: ['', [Validators.required,]],
      name2: ['', [Validators.required,]],
      name3: ['', [Validators.required,]],
    });
  }

  public onDriverFormSubmit() {
    this.driver?this.saveDriver():this.addDriver();
  }

  public addDriver() {
    this.app.drivers.add(this.driverForm.value)
      .subscribe(res=>{
        let newUserId = null;
        if(res.id) newUserId = res.id;
        this.app.drivers.get()
          .subscribe(()=>{
            if(newUserId) this.router.navigate(['drivers']);
          })
      });
  }

  public saveDriver() {
    for(let key in this.driverForm.value) {
      this.driver[key] = this.driverForm.value[key];
    }
    this.driver.save()
     .subscribe(res=>{
        this.app.drivers.get()
          .subscribe()
        this.router.navigate(['drivers']);
     });
  }
}
