import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgxIndexedDBModule } from 'ngx-indexed-db';
import { myDBConfig  } from './db.migration';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DebounceModule } from 'ngx-debounce';
import { ExportAsModule } from 'ngx-export-as';

import { CoreService } from './services/core.service';
import { LStorageService } from './services/lstorage.service';
import { APIService } from './services/api.service';

import { MyFilterPipe } from './pipes/my-filter.pipe';
import { KeysPipe } from './pipes/keys.pipe';
import { AsResultPipe } from './pipes/as-result.pipe';
import { InListFilterPipe } from './pipes/in-list-filter.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';

import { ItemService } from './services/item.service';
import { ItemsService } from './services/items.service';

import { UsersService } from './services/users.service';
import { UserService } from './services/user.service';
import { CompetitorsService } from './services/competitors.service';
import { CompetitorService } from './services/competitor.service';
import { CategoriesService } from './services/categories.service';
import { CategoryService } from './services/category.service';
import { RacesService } from './services/races.service';
import { RaceService } from './services/race.service';
import { RaceEventsService } from './services/raceevents.service';
import { RaceEventService } from './services/raceevent.service';
import { ResultsService } from './services/results.service';





import { UserGroupsService } from './services/user-groups.service';
import { UserGroupService } from './services/user-group.service';


import { LogService } from './services/log.service';
import { LogItemService } from './services/log-item.service';

import { TrashService } from './services/trash.service';
import { StateService } from './services/state.service';
import { APPEventsService } from './services/appevents.service';
import { ReferenceService } from './services/reference.service';
import { SettingsService } from './services/settings.service';
import { AccountsService } from './services/accounts.service';
import { AccountService } from './services/account.service';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsControlsComponent } from './components/common/items-controls/items-controls.component';
import { ItemsTableComponent } from './components/common/items-table/items-table.component';
import { ItemsPaginatorComponent } from './components/common/items-paginator/items-paginator.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { SearchSelectComponent } from './components/common/search-select/search-select.component';
import { MultiSelectComponent } from './components/common/multi-select/multi-select.component';
import { CompetitorsComponent } from './components/competitors/competitors.component';
import { CompetitorComponent } from './components/competitor/competitor.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { InputTreeComponent } from './components/common/input-tree/input-tree.component';
import { NavAPPEvtsLogComponent } from './components/nav-appevts-log/nav-appevts-log.component';
import { ItemsImportComponent } from './components/common/items-import/items-import.component';
import { RacesComponent } from './components/races/races.component';
import { RaceComponent } from './components/race/race.component';
import { GoComponent } from './components/go/go.component';
import { ResultsComponent } from './components/results/results.component';
import { NavTrashComponent } from './components/nav-trash/nav-trash.component';

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/');
}

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    HomeComponent,
    HeaderComponent,
    UsersComponent,
    UserComponent,
    MyFilterPipe,
    KeysPipe,
    InListFilterPipe,
    SearchSelectComponent,
    MultiSelectComponent,
    AsResultPipe,
    CompetitorsComponent,
    CompetitorComponent,
    CategoriesComponent,
    CategoryComponent,
    InputTreeComponent,
    OrderByPipe,
    NavTrashComponent,
    ItemsControlsComponent,
    ItemsTableComponent,
    ItemsPaginatorComponent,
    NavAPPEvtsLogComponent,
    ItemsImportComponent,
    RacesComponent,
    RaceComponent,
    GoComponent,
    ResultsComponent,
  ],
  imports: [
    BrowserModule,
    NgxIndexedDBModule.forRoot(myDBConfig()),
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule,
    DebounceModule,
    ExportAsModule,
    TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
  ],
  providers: [
    CoreService,
    LStorageService,
    APIService,
    ItemService,
    UserService, 
    UserGroupsService,
    ItemsService,
    UsersService,
    CompetitorsService,
    CompetitorService,   
    CategoriesService,
    CategoryService,  
    RacesService,
    RaceService,   
    RaceEventsService,
    RaceEventService,   
    ResultsService,   
     
    UserGroupService,
    LogService,   
    LogItemService,   
    TrashService,   
    StateService,   
    APPEventsService,
    ReferenceService,
    SettingsService,
    AccountsService,
    AccountService,  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




