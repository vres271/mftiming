import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { CoreService } from '../../services/core.service';
import { throwError, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {
  public signInForm: FormGroup;
  public signInFormError: string = '';

  constructor(
    public core: CoreService,
    private fb: FormBuilder,
    private router: Router,
    ) { }

  ngOnInit() {
    //if(this.core.session) this.router.navigate(['']);
    this.initForm();
  }

  public initForm(){
    this.signInForm = this.fb.group({
      name: ['', [
          Validators.required,
        ]
      ],
      password: ['', [
          Validators.required
        ]
      ]
    });
  }


  public onFromSubmit(event) {
    this.signInFormError = '';
    this.core.login(this.signInForm.value)
      .subscribe(res=>{
        if(res.sid) {
          this.router.navigate(['']);
        } else {
          this.signInFormError = (res.error&&res.error.error)?res.error.error:'Unknown error';
        }
      });
    return false;
  }

}
