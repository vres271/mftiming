import { Component, OnInit } from '@angular/core';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-drivers',
  templateUrl: './drivers.component.html',
  styleUrls: ['./drivers.component.scss']
})
export class DriversComponent implements OnInit {
  public itemType = 'drivers';

  constructor(
    public app: AppService,
  ) { }

  ngOnInit() {
  }



}

