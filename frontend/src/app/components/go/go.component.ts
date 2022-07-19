import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, ValidatorFn, FormControl, ValidationErrors } from '@angular/forms';
import { iif, of } from 'rxjs';
import { mergeMap , tap, switchMap} from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import {  faBan, faSave, faTimes, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { GoService } from '../../services/go.service';
import { Race } from '../../services/race.service';

@Component({
  selector: 'app-go',
  templateUrl: './go.component.html',
  styleUrls: ['./go.component.scss']
})
export class GoComponent implements OnInit {
  public newEvent: any|null = null;
  public s: any;
  public editEventId: number = 0;
  public editEventFilter: any = {
    fullNameNum: '',
  };
  faBan = faBan;
  faSave = faSave;
  faTimes = faTimes;
  faTrashAlt = faTrashAlt;
  @Input('result') result: {items:any[]} = {items:[]};
  @Input('editEventFilterresult') editEventFilterresult: {items:any[]} = {items:[]};

  constructor(
    public route: ActivatedRoute,
    public app: AppService,
    public router: Router,

  ) { }

  ngOnInit() {

    this.s = this.app.state.items['go'];
    this.app.ifAppReady()
      .pipe(
        switchMap(()=>this.route.params),
        tap(params=>{
          if(params['raceId']) {
            this.app.go.race = this.app.races._index.id[params['raceId']]
            this.createNewEvent();
            this.app.go.get();
            const iid = setInterval(()=>{
              //const elem = document.getElementById('scroledCnt');
              const elem = document.body;
              const targetElem = document.getElementById('scrolledTarget');
              if(elem) {
                const resizeObserver = new (window as any).ResizeObserver((e:any) => {
                  targetElem.style.maxHeight = (elem.clientHeight-140)+'px';
                }); 
                resizeObserver.observe(elem);
                window.clearInterval(iid);
                return;
              }
            },100)

          } else {
            this.app.go.reset();
          }

        }),
      ).subscribe(()=>{})
  }

  private createNewEvent = ()=>{
    this.newEvent = {
      accountId: 0,
      eventType:1,
      raceId: this.app.go.race.id,
      competitorId:0,
      t:0,
      desc:'',
      d:0,      
      categoryIds:[],      
    }
  }

  public resetEventsFilter() {
    this.s.eventsFilter = {
        fullNameNum: '',
      }
  }

  public setEditCopetitorId(item:any) {
    item.competitorId=this.editEventFilterresult.items[0]?this.editEventFilterresult.items[0].id:0
  }

  public switchEditEventForm(item:any, save:boolean=false) {
    if(this.editEventId!==item.id) {
      this.editEventId=item.id;
    } else {
      if(save) {
        item.save()
        .subscribe(()=>{
          this.editEventId=0;
          this.app.go.get();
        });
      } else {
        this.editEventId=0;
        this.app.raceevents.get(item.id)
          .subscribe(()=>this.app.go.get())
      }
    }
  }

  public saveEvent(item:any) {
    item.save()
      .subscribe(()=>{
        this.editEventId=0;
        this.app.go.get();
      });
  }

  public delEvent(item:any) {
    item.del()
      .subscribe(()=>{
        this.app.raceevents.get().subscribe(()=>{
          this.app.go.get();
        });
      });
  }

  public delayH = (item, items, i)=>{
    if(!this.s.eventsTimeScale) return '';
    if(item&&items&&item.eventType!=3) {
      let m = 0;
      if(items[i-1]) {
        m = items[i-1].t - item.t;
      } else {
        //m = 0;
        m = this.app.go.t - item.t;
      }
      return parseInt(String(m/this.s.eventsTimeScale))+'px'
    }
    return '';
  }

  public onFormSubmit = (eventType, competitorId=0)=>{
    this.newEvent.eventType = eventType;
    this.newEvent.competitorId = competitorId;
    this.newEvent.t = 1*this.app.go.t;

    if(!competitorId && this.s.filter.competitorName) {
      this.newEvent.desc += ' ['+this.s.filter.competitorName+']';
    }
    this.app.raceevents.add(this.newEvent)
      .subscribe(res=>{
        this.app.raceevents.get()
          .subscribe(()=>{
            this.app.go.get();
            this.createNewEvent();
            this.s.filter.competitorName = '';
          })
      });

  }


}
