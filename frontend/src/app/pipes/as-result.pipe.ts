import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'asResult',
  pure: false
})
export class AsResultPipe implements PipeTransform {

  transform(items: any[], result: any): any {
    result.items = items;
    return items;
  }

}
