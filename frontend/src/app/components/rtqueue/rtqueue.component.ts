import { Component, OnInit } from '@angular/core';
import { tap, switchMap} from 'rxjs/operators';
import { ActivatedRoute, Params } from '@angular/router';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-rtqueue',
  templateUrl: './rtqueue.component.html',
  styleUrls: ['./rtqueue.component.scss']
})
export class RTQueueComponent implements OnInit {

  public svc: any = null;
  public itemType = 'rtqueue';
  public s: any;

  constructor(
    public route: ActivatedRoute,
    public app: AppService,
  ) { }

  ngOnInit() {
    this.svc = this.app[this.itemType];
    this.s = this.app.state.items[this.itemType];

    this.app.ifAppReady()
      .pipe(
        switchMap(()=>this.route.params),
        tap(params=>{
          this.app.rtqueue.get(params).subscribe();
        }),
      ).subscribe()

  }

  public refresh() {
    this.app.rtqueue.get().subscribe();
  }


}

