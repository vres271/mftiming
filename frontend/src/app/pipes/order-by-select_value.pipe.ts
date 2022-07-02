import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBySelectValue'
})

export class OrderBySelectValue implements PipeTransform {
    transform(obj: any, currentField: string, value: any): any {
        obj.sort((a, b)=>(a[currentField]===value?-1:1));
        return obj
    }
}