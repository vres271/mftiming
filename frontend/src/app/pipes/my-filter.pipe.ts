import { Pipe, PipeTransform } from '@angular/core';
import { of } from 'rxjs';

@Pipe({
    name: 'myFilter',
    pure: false
})
export class MyFilterPipe implements PipeTransform {
    transform(items: any[], filter: any, byKeys: string[] = null): any {
        if (!items || !filter) {
            return items;
        }
        //if(filter.length<=1) return items;
        // filter items array, items which match and return true will be
        // kept, false will be filtered out
        if(typeof filter === 'string') {
            if(filter==='') return items;
            return items.filter(item => {
                if(byKeys) {
                    for(let key in byKeys) {
                        if(item[byKeys[key]]!==undefined) {
                            if(RegExp(filter, 'i').test(item[byKeys[key]])) return true;    
                        }
                    }
                } else {
                    for(let key in item) {
                        if(RegExp(filter, 'i').test(item[key])) return true;
                    }
                }
                return false;
            });
        } else if (typeof filter === 'object') {
            return items.filter(item => {
                let result = true;
                for(let key in filter) {
                    if(filter[key]===null && (item[key]===undefined || item[key]===false)) {
                        result = result&&true;
                    } else {
                        if((filter[key]!=='')&&(item[key]!==undefined)) {
                            result = result&&(RegExp(filter[key], 'i').test(item[key]));   
                        }
                    }
                }
                return result;
            })
        }
        return false;
    }
}


