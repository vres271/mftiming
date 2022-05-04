import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxIndexedDBModule, DBConfig } from 'ngx-indexed-db';

import { AppComponent } from './components/app.component';
import { AccountsComponent } from './components/accounts/accounts.component';

// Ahead of time compiles requires an exported function for factories
export function migrationFactory() {
  // The animal table was added with version 2 but none of the existing tables or data needed
  // to be modified so a migrator for that version is not included.
  return {
    1: (db:any, transaction:any) => {
      const store = transaction.objectStore('people');
      store.createIndex('country', 'country', { unique: false });
    },
    3: (db:any, transaction:any) => {
      const store = transaction.objectStore('people');
      store.createIndex('age', 'age', { unique: false });
    }
  };
}

const dbConfig: DBConfig  = {
  name: 'MyDb',
  version: 3,
  objectStoresMeta: [{
    store: 'people',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: false } },
      { name: 'email', keypath: 'email', options: { unique: false } }
    ]
  }, {
    // animals added in version 2
    store: 'animals',
    storeConfig: { keyPath: 'id', autoIncrement: true },
    storeSchema: [
      { name: 'name', keypath: 'name', options: { unique: true } },
    ]
  }],
  // provide the migration factory to the DBConfig
  migrationFactory
};

@NgModule({
  declarations: [
    AppComponent,
    AccountsComponent
  ],
  imports: [
    BrowserModule,
    NgxIndexedDBModule.forRoot(dbConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
