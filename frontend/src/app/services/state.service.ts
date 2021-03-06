import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  public types: string[];
  public default: any = {
    filter: {
      name: '',
    },
    limit: 10
  };
  public items: object = {
    go:{
      eventsFilter: {
        competitorNameNum: '',
        categoryName: '',
        _lap: '',
      }
      ,eventsTimeScale: 0
      ,eventsLimit: 50
      ,filter: {
        competitorName:''
      }
    },
    users:{
      filter: {
        name: '',
        email: '',
      }
      ,limit: 1*this.default.limit
    },
    recievers:{
      filter: {
        name: '',
        unitHwName: '',
        unitUid: '',
        tagNums: '',
      }
      ,limit: 1*this.default.limit
    },
    competitors:{
      filter: {
        //accountId: '',
        regDate: '',
        num: '',
        fullName: '',
        birdthDate: '',
        categoryName: '',
        team: '',
        desc: '',
        //d: '',
      }
      ,limit: 1*this.default.limit
    },
    races:{
      filter: {
        //accountId: '',
        name: '',
        from: '',
        to: '',
        //d: '',
      }
      ,limit: 1*this.default.limit
    },
    tags:{
      filter: {
        num: '',
        unitNm: '',
        driverName: '',
        total_limit: '',
        day_limit: '',
        total_balance: '',
        day_balance: '',
        recieverUnitNames: '',
      }
      ,limit: 1*this.default.limit
    },
    log:{
      filter: {
        userName: '',
        ip: '',
        usessions_id: '',
        objectTypeName: '',
        object_name: '',
        actionTypeName: '',
      }
      ,limit: 1*this.default.limit
    },
    distributions:{
      filter: {
        dt: '',
        recieverName: '',
        tagName: '',
        tagDriverName: '',
        amount: '',
        total_limit: '',
        day_limit: '',
        total_balance: '',
        day_balance: '',
      }
      ,limit: 1*this.default.limit
    },
    rtqueue:{
      filter: {
        typeName: '',
        recieverName: '',
        unitNm: '',
        units_imei: '',
        tagName: '',
        tags_num: '',
        value: '',
        userName: '',
        statusName: '',
        try: '',
        try_limit: '',
      }
      ,limit: 1*this.default.limit
    },
  };

  constructor() {
  }

  public createDefaults(types: string[]) {
    this.types = types;
    for(let key in this.types) {
      let type = this.types[key];
      if(!this.items[type]) {
        this.items[type] = JSON.parse(JSON.stringify(this.default));
      }
    }
  }

  public resetFilter(type: string) {
    for(let key in this.items[type].filter) {
      this.items[type].filter[key] = '';
    }
  }

}
