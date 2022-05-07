import { DBConfig } from 'ngx-indexed-db';

// Ahead of time compiles requires an exported function for factories
const migrationFactory =()=>{
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
    },
    4: (db:any, transaction:any) => {
      const store = transaction.objectStore('users');
      store.createIndex('email', 'email', { unique: true });
      store.createIndex('active', 'active', { unique: false });
    },
    6: (db:any, transaction:any) => {
      const store = transaction.objectStore('users');
      store.createIndex('active', 'active', { unique: false });
    },
  };
}

export function myDBConfig():DBConfig { 
  return{
    name: 'MyDb',
    version: 6,
    objectStoresMeta: [
      {
        store: 'people',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'name', keypath: 'name', options: { unique: false } },
          { name: 'email', keypath: 'email', options: { unique: false } }
        ]
      }, 
      {
        // animals added in version 2
        store: 'animals',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'name', keypath: 'name', options: { unique: true } },
        ]
      },
      {
        store: 'accounts',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'name', keypath: 'name', options: { unique: true } },
          { name: 'dt', keypath: 'dt', options: { unique: false } },
        ]
      },
      {
        store: 'users',
        storeConfig: { keyPath: 'id', autoIncrement: true },
        storeSchema: [
          { name: 'accounts_id', keypath: 'accounts_id', options: { unique: false } },
          { name: 'name', keypath: 'name', options: { unique: true } },
          { name: 'password', keypath: 'password', options: { unique: false } },
        ]
      },
    ],
    // provide the migration factory to the DBConfig
    migrationFactory
  }
};