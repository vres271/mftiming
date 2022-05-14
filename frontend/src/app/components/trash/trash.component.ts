import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { mergeMap , tap, switchMap} from 'rxjs/operators';
import { AppService } from '../../services/app.service';
import { faTrashAlt, faTrashRestore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
  public objectType: string = '';
  faTrashAlt = faTrashAlt;
  faTrashRestore = faTrashRestore;
  public result: {items:any[]} = {items:[]};
  constructor(
    public route: ActivatedRoute,
    public app: AppService,
  ) { }

  ngOnInit() {
    
    this.app.ifAppReady()
      .pipe(
        switchMap(()=>this.route.params),
        tap(params=>{
          this.objectType = params.objectType;
          this.app.trash.get(params.objectType, params.objectId).subscribe();
        }),
      ).subscribe()

  }

  public restore(item) {
    this.app.trash.restore(item)
      .pipe(
          //switchMap(_=>this.app.trash.get(this.objectType))
        ).subscribe(res=>{
        if(res.restored) this.app.trash.removeItem(item);
      });

    return false;
  }

}
