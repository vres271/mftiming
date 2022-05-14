import { Component, OnInit, Input } from '@angular/core';
import { faTrashAlt, faTrashRestore } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-trash',
  templateUrl: './nav-trash.component.html',
  styleUrls: ['./nav-trash.component.scss']
})
export class NavTrashComponent implements OnInit {

  @Input('app') app;
  faTrashAlt = faTrashAlt;
  faTrashRestore = faTrashRestore;
  public trashSize: number = 0;

  constructor() {}

  ngOnInit() {}

  public checkSize():number {
    this.trashSize = this.app.trash.Length;
    return this.trashSize;
  }

  public restore(item, e: Event) {
    e.stopPropagation();
    e.preventDefault();
    this.app.trash.restore(item)
      .subscribe(res=>{
        if(res.restored) this.app.trash.removeItem(item);
      });
    return false;
  }

}
