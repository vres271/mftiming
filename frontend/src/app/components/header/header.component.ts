import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCog, faSignOutAlt, faTrashAlt, faTrashRestore } from '@fortawesome/free-solid-svg-icons';

import { CoreService } from '../../services/core.service';
import { AppService } from '../../services/app.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  faCog = faCog;
  faSignOutAlt = faSignOutAlt;
  public r: any;
  
  constructor(
    public core: CoreService,
    public app: AppService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.core.onLoggedIn().subscribe(_=>{
      this.r = this.core.user.rights.nav.header; 
    });
  }

  public logOut() {
    this.core.logOut().subscribe(res=>{
      if(res.logout) this.router.navigate(['login']);
    });
  }



}
