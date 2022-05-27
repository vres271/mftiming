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





import { UserGroupsService } from './services/user-groups.service';
import { UserGroupService } from './services/user-group.service';
import { TagsService } from './services/tags.service';
import { TagService } from './services/tag.service';
import { UnitsService } from './services/units.service';
import { UnitService } from './services/unit.service';
import { HWTypesService } from './services/hwtypes.service';
import { HWTypeService } from './services/hwtype.service';
import { RecieversService } from './services/recievers.service';
import { RecieverService } from './services/reciever.service';


import { LogService } from './services/log.service';
import { LogItemService } from './services/log-item.service';
import { CommandsService } from './services/commands.service';
import { MessagesService } from './services/messages.service';
import { DistributionService } from './services/distribution.service';
import { DistributionsService } from './services/distributions.service';

import { TrashService } from './services/trash.service';
import { StateService } from './services/state.service';
import { APPEventsService } from './services/appevents.service';
import { ReferenceService } from './services/reference.service';
import { SettingsService } from './services/settings.service';
import { RTQueueService } from './services/rtqueue.service';
import { RTQueueItemService } from './services/rtqueue-item.service';
import { AccountsService } from './services/accounts.service';
import { AccountService } from './services/account.service';
import { TestService } from './services/test.service';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ItemsControlsComponent } from './components/common/items-controls/items-controls.component';
import { ItemsTableComponent } from './components/common/items-table/items-table.component';
import { ItemsPaginatorComponent } from './components/common/items-paginator/items-paginator.component';
import { UsersComponent } from './components/users/users.component';
import { UserGroupsComponent } from './components/user-groups/user-groups.component';
import { UserComponent } from './components/user/user.component';
import { UserGroupComponent } from './components/user-group/user-group.component';
import { TagsComponent } from './components/tags/tags.component';
import { TagComponent } from './components/tag/tag.component';
import { RecieversComponent } from './components/recievers/recievers.component';
import { RecieverComponent } from './components/reciever/reciever.component';
import { SearchSelectComponent } from './components/common/search-select/search-select.component';
import { MultiSelectComponent } from './components/common/multi-select/multi-select.component';
import { CompetitorsComponent } from './components/competitors/competitors.component';
import { CompetitorComponent } from './components/competitor/competitor.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { CategoryComponent } from './components/category/category.component';
import { InputTreeComponent } from './components/common/input-tree/input-tree.component';
import { LogComponent } from './components/log/log.component';
import { NavTrashComponent } from './components/nav-trash/nav-trash.component';
import { TrashComponent } from './components/trash/trash.component';
import { CommandsComponent } from './components/commands/commands.component';
import { DistributionsComponent } from './components/distributions/distributions.component';
import { NavAPPEvtsLogComponent } from './components/nav-appevts-log/nav-appevts-log.component';
import { SettingsComponent } from './components/settings/settings.component';
import { AccountsComponent } from './components/accounts/accounts.component';
import { AccountComponent } from './components/account/account.component';
import { RTQueueComponent } from './components/rtqueue/rtqueue.component';
import { ItemsImportComponent } from './components/common/items-import/items-import.component';
import { RacesComponent } from './components/races/races.component';
import { RaceComponent } from './components/race/race.component';
import { GoComponent } from './components/go/go.component';

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
    UserGroupsComponent,
    UserComponent,
    UserGroupComponent,
    TagsComponent,
    TagComponent,
    MyFilterPipe,
    KeysPipe,
    RecieversComponent,
    RecieverComponent,
    InListFilterPipe,
    SearchSelectComponent,
    MultiSelectComponent,
    AsResultPipe,
    CompetitorsComponent,
    CompetitorComponent,
    CategoriesComponent,
    CategoryComponent,
    InputTreeComponent,
    LogComponent,
    OrderByPipe,
    NavTrashComponent,
    TrashComponent,
    ItemsControlsComponent,
    ItemsTableComponent,
    ItemsPaginatorComponent,
    CommandsComponent,
    DistributionsComponent,
    NavAPPEvtsLogComponent,
    SettingsComponent,
    AccountsComponent,
    AccountComponent,
    RTQueueComponent,
    ItemsImportComponent,
    RacesComponent,
    RaceComponent,
    GoComponent,
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
     
    UserGroupService,
    TagsService,
    TagService,
    UnitsService,
    UnitService,
    HWTypesService,
    HWTypeService,
    RecieversService,
    RecieverService,   
    LogService,   
    LogItemService,   
    TrashService,   
    DistributionService,
    DistributionsService,
    StateService,   
    CommandsService,   
    MessagesService,
    APPEventsService,
    ReferenceService,
    SettingsService,
    RTQueueService,
    RTQueueItemService,  
    AccountsService,
    AccountService,  
    TestService,   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }




