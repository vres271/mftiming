import { Component, OnInit, Input } from '@angular/core';
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
  public newEvent: any|null = null;
  public filter: any|null = {competitorName:''};
  @Input('result') result: {items:any[]} = {items:[]};

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
          if(params['raceId']) {
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

            this.app.go.get();

            // const iid = setInterval(()=>{
            //   const elem = document.getElementById('recontainer');
            //   if(elem) {
            //     const resizeObserver = new ResizeObserver((e:any) => {
            //       // console.log(e[0].target.offsetHeight)
            //       console.log(elem.offsetHeight)
            //     }); 
            //     resizeObserver.observe(elem);
            //     window.clearInterval(iid);
            //     return;
            //   }
            // },100)

          } else {
            this.app.go.reset();
          }

        }),
      ).subscribe(()=>{})
  }

  public delayH = (item, items, i)=>{
    if(item&&items&&item.eventType!=3) {
      let m = 0;
      if(items[i-1]) {
        m = items[i-1].t - item.t;
      } else {
        //m = 0;
        m = this.app.go.t - item.t;
      }
      return parseInt(String(m/1000))+'px'
    }
    return '';
  }

  public onFormSubmit = (eventType, competitorId)=>{
    this.newEvent.eventType = eventType;
    this.newEvent.competitorId = competitorId;
    this.newEvent.t = 1*this.app.go.t;
    this.app.events.add(this.newEvent)
      .subscribe(res=>{
        this.app.events.get()
          .subscribe(()=>{
            this.app.go.get();
          })
      });

  }


}
