import { DBConfig } from 'ngx-indexed-db';

// Ahead of time compiles requires an exported function for factories
const migrationFactory =()=>{
  // The animal table was added with version 2 but none of the existing tables or data needed
  // to be modified so a migrator for that version is not included.
  return {
    7: (db:any, transaction:any) => {
     const store = transaction.objectStore('competitors');
     store.createIndex('email', 'email', { unique: false });
     store.createIndex('phone', 'phone', { unique: false });
    },
    8: (db:any, transaction:any) => {
     const store = transaction.objectStore('users');
     store.createIndex('email', 'email', { unique: false });
    },
    9: (db:any, transaction:any) => {
     const store = transaction.objectStore('users');
     store.createIndex('root', 'root', { unique: false });
    },
    10: (db:any, transaction:any) => {
     const store = transaction.objectStore('raceevents');
     store.createIndex('categoryIds', 'categoryIds', { unique: false });
    },
    11: (db:any, transaction:any) => {
     const store = transaction.objectStore('categories');
     store.createIndex('pos', 'pos', { unique: false });
    },

  };
}

export function myDBConfig():DBConfig { 
  return{
    name: 'MyDb',
    version: 10,
    objectStoresMeta: [
      {
        store: 'accounts',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'name', keypath: 'name', options: { unique: true } },
          { name: 'dt', keypath: 'dt', options: { unique: false } },
          { name: 'd', keypath: 'd', options: { unique: false } },
        ]
      },
      {
        store: 'users',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'accountId', keypath: 'accountId', options: { unique: false } },
          { name: 'name', keypath: 'name', options: { unique: true } },
          { name: 'password', keypath: 'password', options: { unique: false } },
          { name: 'd', keypath: 'd', options: { unique: false } },
        ]
      },
      {
        store: 'seasons',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'accountId', keypath: 'accountId', options: { unique: false } },
          { name: 'name', keypath: 'name', options: { unique: true } },
          { name: 'from', keypath: 'from', options: { unique: false } },
          { name: 'to', keypath: 'to', options: { unique: false } },
          { name: 'd', keypath: 'd', options: { unique: false } },
        ]
      },
      {
        store: 'categories',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'accountId', keypath: 'accountId', options: { unique: false } },
          { name: 'seasonId', keypath: 'seasonId', options: { unique: false } },
          { name: 'name', keypath: 'name', options: { unique: true } },
          { name: 'ageFrom', keypath: 'ageFrom', options: { unique: false } },
          { name: 'ageTo', keypath: 'ageTo', options: { unique: false } },
          { name: 'd', keypath: 'd', options: { unique: false } },
        ]
      },
      {
        store: 'races',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'accountId', keypath: 'accountId', options: { unique: false } },
          { name: 'seasonId', keypath: 'seasonId', options: { unique: false } },
          { name: 'name', keypath: 'name', options: { unique: true } },
          { name: 'from', keypath: 'from', options: { unique: false } },
          { name: 'to', keypath: 'to', options: { unique: false } },
          { name: 'd', keypath: 'd', options: { unique: false } },
        ]
      },
      {
        store: 'competitors',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'accountId', keypath: 'accountId', options: { unique: false } },
          { name: 'regDate', keypath: 'regDate', options: { unique: false } },
          { name: 'num', keypath: 'num', options: { unique: false } },
          { name: 'name1', keypath: 'name1', options: { unique: false } },
          { name: 'name2', keypath: 'name2', options: { unique: false } },
          { name: 'name3', keypath: 'name3', options: { unique: false } },
          { name: 'birdthDate', keypath: 'birdthDate', options: { unique: false } },
          { name: 'categoryId', keypath: 'categoryId', options: { unique: false } },
          { name: 'team', keypath: 'team', options: { unique: false } },
          { name: 'desc', keypath: 'desc', options: { unique: false } },
          { name: 'd', keypath: 'd', options: { unique: false } },
        ]
      },
      {
        store: 'raceevents',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'accountId', keypath: 'accountId', options: { unique: false } },
          { name: 'eventType', keypath: 'eventType', options: { unique: false } },
          { name: 'raceId', keypath: 'raceId', options: { unique: false } },
          { name: 'competitorId', keypath: 'competitorId', options: { unique: false } },
          { name: 't', keypath: 't', options: { unique: false } },
          { name: 'desc', keypath: 'desc', options: { unique: false } },
          { name: 'd', keypath: 'd', options: { unique: false } },
        ]
      },
      {
        store: 'log',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'accountId', keypath: 'accountId', options: { unique: false } },
          { name: 'type', keypath: 'type', options: { unique: false } },
          { name: 'userId', keypath: 'userId', options: { unique: false } },
          { name: 'objectType', keypath: 'objectType', options: { unique: false } },
          { name: 'objectId', keypath: 'objectId', options: { unique: false } },
          { name: 't', keypath: 't', options: { unique: true } },
          { name: 'data', keypath: 'data', options: { unique: false } },
        ]
      },
    ],
    // provide the migration factory to the DBConfig
    migrationFactory
  }
};