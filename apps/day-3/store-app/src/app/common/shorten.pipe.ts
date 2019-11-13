import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'

})
export class ShortenPipe implements PipeTransform {

  transform(value: string, length: number): string {
    const truncatedValue = value.length > length
      ? value.substring(0, length - 1) + '...'
      : value;

    return truncatedValue;
  }

}
