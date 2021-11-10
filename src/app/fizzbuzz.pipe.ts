import { Pipe, PipeTransform } from '@angular/core';
import { fizzbuzz } from './fizzbuzz';

@Pipe({
  name: 'fizzbuzz'
})
export class FizzbuzzPipe implements PipeTransform {

  transform(num: number) {
    return fizzbuzz(num);
  }

}
