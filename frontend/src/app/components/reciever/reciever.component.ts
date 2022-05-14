import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { iif, of } from 'rxjs';
import { mergeMap , tap, switchMap} from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { Reciever } from '../../services/reciever.service';
import { faCog } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-reciever',
  templateUrl: './reciever.component.html',
  styleUrls: ['./reciever.component.scss']
})
export class RecieverComponent implements OnInit {
  faCog = faCog;
  public reciever: Reciever|null = null;
  public recieverForm: FormGroup;
  public submitDisabled: boolean = false;

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
          this.reciever = this.app.recievers._index.id[params['recieverId']]
        }),
      )
        .subscribe(()=>{
          if(this.reciever) this.recieverForm.patchValue(this.reciever)
        })
    
  }

  public initForm(){
    this.recieverForm = this.fb.group({
      units_id: ['', [Validators.required,]],
      tz: [(new Date()).getTimezoneOffset()/-60, [Validators.required,]],
      k: [10, [Validators.required,]],
      tags: [[], [Validators.required,]],
    });
  }

  public onRecieverFormSubmit() {
    this.reciever?this.saveReciever():this.addReciever();
  }

  public addReciever() {
    this.submitDisabled = true;
    this.app.recievers.add(this.recieverForm.value)
      .subscribe(res=>{
        this.submitDisabled = false;
        let newUserId = null;
        if(res.id) newUserId = res.id;
        this.app.recievers.get()
          .subscribe(()=>{
            if(newUserId) {
              this.app.tags.get().subscribe();
              this.router.navigate(['recievers'])
            };
          })
      });
  }

  public saveReciever() {
    for(let key in this.recieverForm.value) {
      this.reciever[key] = this.recieverForm.value[key];
    }
    this.submitDisabled = true;
    this.reciever.save()
     .subscribe((res:any)=>{
        this.submitDisabled = false;
        this.app.recievers.get()
          .subscribe(_=>{
            if(res.saved||(res.saved_mtm&&res.saved_mtm.tags&&(res.saved_mtm.tags.deleted||res.saved_mtm.tags.added))) {
              this.app.tags.get().subscribe();
              this.router.navigate(['recievers']);
            }
          })
     });
  }


}

