import { DBConfig } from 'ngx-indexed-db';

// Ahead of time compiles requires an exported function for factories
const migrationFactory =()=>{
  // The animal table was added with version 2 but none of the existing tables or data needed
  // to be modified so a migrator for that version is not included.
  return {
    // 1: (db:any, transaction:any) => {
    //  const store = transaction.objectStore('people');
    //  store.createIndex('country', 'country', { unique: false });
    // },

  };
}

export function myDBConfig():DBConfig { 
  return{
    name: 'MyDb',
    version: 6,
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
        store: 'category',
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
        store: 'race',
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
          { name: 'name', keypath: 'name', options: { unique: true } },
          { name: 'birdthDate', keypath: 'birdthDate', options: { unique: false } },
          { name: 'team', keypath: 'team', options: { unique: false } },
          { name: 'desc', keypath: 'desc', options: { unique: false } },
          { name: 'd', keypath: 'd', options: { unique: false } },
        ]
      },
      {
        store: 'raceEvents',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'accountId', keypath: 'accountId', options: { unique: false } },
          { name: 'type', keypath: 'type', options: { unique: false } },
          { name: 'raceId', keypath: 'raceId', options: { unique: false } },
          { name: 'competitorId', keypath: 'competitorId', options: { unique: false } },
          { name: 't', keypath: 't', options: { unique: true } },
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