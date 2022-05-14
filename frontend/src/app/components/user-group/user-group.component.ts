import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { iif, of } from 'rxjs';
import { mergeMap , tap, switchMap} from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { UserGroup } from '../../services/user-group.service';

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss']
})
export class UserGroupComponent implements OnInit {
  public userGroup: UserGroup|any = {};
  public userGroupForm: FormGroup;


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
        switchMap((params:any)=>(params['userGroupId']?this.app.ugroups._index.id[params['userGroupId']].get():of(undefined))),
        tap((item:any)=>{this.userGroup = item}),
      )
        .subscribe(()=>{
          if(this.userGroup) {
            this.userGroupForm.patchValue(this.userGroup);
          } else {
            this.userGroup = {_ready:true}
          }
        })
    
  }

  public initForm(){
    this.userGroupForm = this.fb.group({
      name: ['', [Validators.required,]],
      rights: ['', []],
    });
  }

  public onUserGroupFormSubmit() {
    this.userGroup.id?this.saveUserGroup():this.addUserGroup();
  }

  public addUserGroup() {
    this.app.ugroups.add(this.userGroupForm.value)
      .subscribe(res=>{
        let newUserId = null;
        if(res.id) newUserId = res.id;
        this.app.ugroups.get()
          .subscribe(()=>{
            if(newUserId) this.router.navigate(['user-groups']);
          })
      });
  }

  public saveUserGroup() {
    for(let key in this.userGroupForm.value) {
      this.userGroup[key] = this.userGroupForm.value[key];
    }
    this.userGroup.save()
     .subscribe(res=>{
        this.app.ugroups.get()
          .subscribe()
        this.router.navigate(['user-groups']);
     });
  }
}
