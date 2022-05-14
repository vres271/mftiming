export class Indexable {
  public items:any = [];
  public _index: any = {};
  public _indexableProps:string[] = [];

  constructor() {
    this.items = [];
    this._index = {};
  }

  public createIndex(items) {
    this._indexableProps.forEach(prop=>{
      this._index[prop] = {};
      items.forEach(item=>{
        if(item[prop]) this._index[prop][item[prop]] = item;
      })
    })
    return this._index;
  }
}
