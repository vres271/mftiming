import { Component, OnInit , Input,ChangeDetectionStrategy} from '@angular/core';

@Component({
  selector: 'app-items-paginator',
  templateUrl: './items-paginator.component.html',
  styleUrls: ['./items-paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ItemsPaginatorComponent implements OnInit {
  @Input('state') s: any;
  @Input('result') result?: any;

  constructor() { }

  ngOnInit() {
  }

}
