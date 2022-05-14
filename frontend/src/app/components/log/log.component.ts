import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';
import { ActivatedRoute, Params } from '@angular/router';
import { mergeMap , tap, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss']
})
export class LogComponent implements OnInit {
  public result: {items:any[]} = {items:[]};

  constructor(
    public route: ActivatedRoute,
    public app: AppService,
  ) {}

  ngOnInit() {
    
    this.app.ifAppReady()
      .pipe(
        switchMap(()=>this.route.params),
        tap(params=>{
          this.app.log.get(params).subscribe();
        }),
      ).subscribe()
  }
  
  public refresh() {
    this.app.log.get().subscribe();
  }


}

