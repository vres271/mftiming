import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIndexedDBModule } from 'ngx-indexed-db';

import { AppComponent } from './components/app.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { myDBConfig  } from './db.migration';


@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    NgxIndexedDBModule.forRoot(myDBConfig()),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
