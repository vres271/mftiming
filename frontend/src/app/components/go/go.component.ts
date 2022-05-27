import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { iif, of } from 'rxjs';
import { mergeMap , tap, switchMap} from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { GoService } from '../../services/go.service';
import { Race } from '../../services/race.service';

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.scss']
})
export class GoComponent implements OnInit {
  public newEvent: Object|null = null;

  constructor(
    public route: ActivatedRoute,
    public app: AppService,
    public router: Router,

  ) { }

  ngOnInit() {


    this.app.ifAppReady()
      .pipe(
        switchMap(()=>this.route.params),
        tap(params=>{
          this.app.go.race = this.app.races._index.id[params['raceId']]

          this.newEvent = {
            accountId: 0,
            eventType:1,
            raceId: this.app.go.race.id,
            competitorId:0,
            t:0,
            desc:'',
            d:0,      
          }
          let newEvent:any = this.newEvent;

          const interval = setInterval(function() {
            newEvent.t = (new Date).getTime();
          }, 100)

        }),
      ).subscribe(()=>{})
  }

  public delayH = (item, items, i)=>{
    if(item&&items) {
      let m = 0;
      if(items[i-1]) {
        m = items[i-1].t - item.t;
      } else {
        m = 0;
        //m = (new Date).getTime() - item.t;
      }
      return parseInt(String(m/1000))+'px'
    }
    return '';
  }

  public onFormSubmit = ()=>{
    this.app.events.add(this.newEvent)
      .subscribe(res=>{
        this.app.events.get()
          .subscribe(()=>{})
      });

  }


}
