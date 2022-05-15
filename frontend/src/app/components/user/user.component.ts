import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { iif, of } from 'rxjs';
import { mergeMap , tap, switchMap} from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { User,  UserService} from '../../services/user.service';
import { faEyeSlash, faEye} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  public user: User|any = {};
  public userForm: FormGroup;
  faEyeSlash = faEyeSlash;
  faEye = faEye;
  public userPasswordConfirm: string = '';  // Kostyl!!!!
  public passwordsVisible: boolean = false;  
  public updateEvent: Event = new Event('treeUpdated');

  constructor(
    public route: ActivatedRoute,
    private fb: FormBuilder,
    public app: AppService,
    public router: Router,
    public userService: UserService,

  ) { }

  ngOnInit() {
    this.initForm();
    this.getUser(this.app.ifAppReady());
      
  }

  public getUser(onready:any) {
    onready.pipe(
        switchMap(()=>this.route.params),
        switchMap((params:any)=>(params['userId']?this.app.users._index.id[params['userId']].get():of(undefined))),
        tap((item:any)=>{this.user = item}),
      )
        .subscribe(()=>{
          if(this.user) {
            this.userForm.patchValue(this.user);
          } else {
            this.userForm.get('password').setValidators(Validators.required);
            this.userForm.controls['password'].updateValueAndValidity();
            this.user = {_ready:true};
          }
          document.dispatchEvent(this.updateEvent);
        })
  }

  public initForm(){
    this.userForm = this.fb.group({
      name: ['', [Validators.required]],
      password: ['', []],
      email: ['', [Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      d: [0, []],
    });
  }

  public checkPasswordConfirmation(e) { // Kostyl!!!!
    if(e) this.userPasswordConfirm = e.srcElement.value;
    if(this.userPasswordConfirm!==this.userForm.controls['password'].value) {
      this.userForm.controls['password'].setErrors({nonConfirmed: true});
      return false;
    }
    this.userForm.controls['password'].setErrors({nonConfirmed: null});
    this.userForm.controls['password'].updateValueAndValidity();
  }


  public onUserFormSubmit(e:Event) {
    this.user.id?this.saveUser():this.addUser();
    return false;
  }

  public addUser() {
    this.app.users.add(this.userForm.value)
      .subscribe(res=>{
        let newUserId = null;
        if(res.id) newUserId = res.id;
        this.app.users.get()
          .subscribe(()=>{
            if(newUserId) this.router.navigate(['users']);
          })
      });
  }

  public saveUser() {
    for(let key in this.userForm.value) {
      this.user[key] = this.userForm.value[key];
    }
    this.user.save()
     .subscribe(res=>{
        this.app.users.get()
          .pipe(
            tap(_=>this.getUser(of(null)))
          )
          .subscribe()
          this.router.navigate(['users']);

     });
  }



}
