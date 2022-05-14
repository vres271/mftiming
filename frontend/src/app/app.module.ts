import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { AppRoutingModule } from './app-routing.module';
import { myDBConfig  } from './db.migration';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MyFilterPipe } from './pipes/my-filter.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { AsResultPipe } from './pipes/as-result.pipe';
import { InListFilterPipe } from './pipes/in-list-filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

import { AppComponent } from './components/app.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { HomeComponent } from './components/home/home.component';
import { SeasonsComponent } from './components/seasons/seasons.component';

import { AppService } from './services/app.service';
import { ItemService } from './services/item.service';
import { ItemsService } from './services/items.service';
import { HeaderComponent } from './components/header/header.component';

import { ItemsControlsComponent } from './components/common/items-controls/items-controls.component';
// import { ItemsTableComponent } from './components/common/items-table/items-table.component';
import { ItemsPaginatorComponent } from './components/common/items-paginator/items-paginator.component';
import { SearchSelectComponent } from './components/common/search-select/search-select.component';
// import { MultiSelectComponent } from './components/common/multi-select/multi-select.component';
// import { InputTreeComponent } from './components/common/input-tree/input-tree.component';
import { ItemsImportComponent } from './components/common/items-import/items-import.component';
 

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent,
    HomeComponent,
    SeasonsComponent,
    HeaderComponent,
    ItemsControlsComponent,
    // ItemsTableComponent,
    ItemsPaginatorComponent,
    ItemsImportComponent,
    SearchSelectComponent,
    MyFilterPipe,
    KeysPipe,
    AsResultPipe,
    InListFilterPipe,
    OrderByPipe,
  ],
  imports: [
    BrowserModule,
    NgxIndexedDBModule.forRoot(myDBConfig()),
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    AppService,
    ItemService,
    ItemsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
