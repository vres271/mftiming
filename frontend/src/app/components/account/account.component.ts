import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { iif, of , fromEvent} from 'rxjs';
import { mergeMap , tap, switchMap} from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { Account } from '../../services/account.service';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {
  public account: Account|null = null;
  public accountForm: FormGroup;
  public initResult: any;
  public initializing: boolean = false;
  faCog = faCog;


  constructor(
    public route: ActivatedRoute,
    private fb: FormBuilder,
    public app: AppService,
    public router: Router,

  ) { }

  ngOnInit() {
    this.initForm();

    this.app.ifAccountsReady()
    .pipe(
        switchMap(()=>this.route.params),
        switchMap((params:any)=>(params['accountId']?this.app.accounts._index.id[params['accountId']].get():of(undefined))),
        tap((item:any)=>{this.account = item}),
      )
    .subscribe(()=>{
      if(this.account) this.accountForm.patchValue(this.account);
    })

    
  }

  public initForm(){
    this.accountForm = this.fb.group({
      name: ['', [Validators.required,]],
      wtoken: ['', [Validators.required,]],
    });
  }

  public onAccountFormSubmit() {
    this.account?this.saveAccount():this.addAccount();
  }

  public addAccount() {
    this.app.accounts.add(this.accountForm.value)
      .subscribe(res=>{
        let newUserId = null;
        if(res.id) newUserId = res.id;
        this.app.accounts.get()
          .subscribe(()=>{
            if(newUserId) this.router.navigate(['accounts']);
          })
      });
  }

  public saveAccount() {
    for(let key in this.accountForm.value) {
      this.account[key] = this.accountForm.value[key];
    }
    this.account.save()
     .subscribe(res=>{
        this.app.accounts.get()
          .subscribe()
        this.router.navigate(['accounts']);
     });
  }

  public initAccount() {
    this.initializing = true;
    for(let key in this.accountForm.value) {
      this.account[key] = this.accountForm.value[key];
    }
    this.initResult = {};
    this.account.init().subscribe(result=>{this.initResult = result; this.initializing = false;});

  }

}
