import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'error'
})
export class ErrorPipe implements PipeTransform {
  transform(value: string) {
    const errorText = "ERROR: " + value + ' --- please contact a technician for assistance. Thanks for your patience.';
    return errorText;
  }
}