import { Component } from '@angular/core';
import { CoreService } from '../services/core.service';
import { AppService } from '../services/app.service';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LStorageService } from '../services/lstorage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'rfid-limit';
  param = {value: 'world'};

  constructor(
    public core: CoreService,
    public app: AppService,
    public router: Router,
    public translate: TranslateService,
    public storage: LStorageService,
  ) {
    translate.addLangs(['en', 'ru']);
    translate.setDefaultLang('ru');

    let storedLng = String(this.storage.get('lng'));
    const browserLang = storedLng?storedLng:translate.getBrowserLang();
    translate.use(browserLang.match(/en|ru/) ? browserLang : 'ru');
  }

  ngOnInit() {

    this.core.init()
      .subscribe(res=>{});
      
    this.app.init();

    this.core.onLoggedIn()
      .subscribe(res=>{
        if(this.router.isActive('login', false)) this.router.navigate(['units']);
      });

    this.core.onCheckAuthError()
      .subscribe(res=>{this.core.clearSession(); if(!this.router.isActive('login', false)) this.router.navigate(['login']);});

    this.app.onAppReady()
      .subscribe();

  }

}
