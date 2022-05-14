import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'inListFilter'
})
export class InListFilterPipe implements PipeTransform {

  transform(items: any[], list: [number], exist: boolean = true,indexKey: string = 'id'): any {
    if (!items || !list ) return items;
    return items.filter(item => (exist === (list.indexOf(item[indexKey])>=0)))
  }

}
