import { Pipe, PipeTransform } from '@angular/core';



@Pipe({name: 'keys'})
export class KeysPipe implements PipeTransform {
  transform(obj, args: string[]): any {
    const keys = [];
    for (const key of Object.keys(obj)) {
      keys.push({key: key, value: obj[key]});
    }
    return keys;
  }
}
