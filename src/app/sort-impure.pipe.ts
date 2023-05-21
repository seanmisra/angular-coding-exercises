import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortImpure',
  pure: false
})
export class SortImpurePipe implements PipeTransform {

  transform(arr: string[], ...args: unknown[]): string[] {
    console.log("...impure pipe triggered...");
    const sortedArr = arr.sort((a: string, b: string) => {
      return a.localeCompare(b);
    });

    return sortedArr;
  }
}
