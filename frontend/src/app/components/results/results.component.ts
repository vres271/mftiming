import { Component, OnInit } from '@angular/core';
import { mergeMap , tap, switchMap} from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { Router } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss']
})
export class ResultsComponent implements OnInit {

  constructor(
    public route: ActivatedRoute,
    public app: AppService,
    public router: Router,

  ) { }

  public res = 0;

  ngOnInit() {
    this.app.ifAppReady()
      .pipe(
        switchMap(()=>this.route.params),
        tap(params=>{
          if(params['raceId']) {
            this.app.results.race = this.app.races._index.id[params['raceId']]

            this.app.results.get();


          } else {
            //this.app.results.reset();
          }

        }),
      ).subscribe(()=>{})
  }

}
