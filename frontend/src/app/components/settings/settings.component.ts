import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { mergeMap , tap, switchMap} from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { AppService } from '../../services/app.service';
import { LStorageService } from '../../services/lstorage.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {
  public settingsTypes = ['main'];
  public settingsType: string = '';

  constructor(
    public route: ActivatedRoute,
    public router: Router,
    public app: AppService,
    public translate: TranslateService,
    public storage: LStorageService,
   ) {
    const browserLang = translate.getBrowserLang();
  }
  
  ngOnInit() {
    
    this.app.ifAppReady()
      .pipe(
        switchMap(()=>this.route.params),
        tap(params=>{
          if(!params.settingsType) this.router.navigate(['settings/'+this.settingsTypes[0]]);
          this.settingsType = params.settingsType;
        }),
      ).subscribe()

  }

  public save() {
    this.app.settings.save()
      .subscribe()
  }

  public changeLng(lng) {
    this.storage.set('lng', lng);
    this.translate.use(lng);
  }
}
