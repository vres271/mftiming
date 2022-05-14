import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-nav-appevts-log',
  templateUrl: './nav-appevts-log.component.html',
  styleUrls: ['./nav-appevts-log.component.scss'],
})
export class NavAPPEvtsLogComponent implements OnInit {
  @Input('app') app;

  constructor() { }

  ngOnInit() {
  }

  public filterByTypes(item) {
    return (item.a!==5 && item.a!==6);
  }

}
