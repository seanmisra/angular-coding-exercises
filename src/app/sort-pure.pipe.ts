import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortPure'
})
export class SortPurePipe implements PipeTransform {

  transform(arr: string[], ...args: unknown[]): string[] {
    console.log("...pure pipe triggered...");
    const sortedArr = arr.sort((a: string, b: string) => {
      return a.localeCompare(b);
    });
    
    return sortedArr;
  }

}
