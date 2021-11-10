import { Pipe, PipeTransform } from '@angular/core';
import { FizzbuzzService } from './fizzbuzz.service';

@Pipe({
  name: 'fizzbuzz'
})
export class FizzbuzzPipe implements PipeTransform {
  constructor(private fizzbuzz: FizzbuzzService) {}

  transform(num: number) {
    return this.fizzbuzz.fizzBuzz(num);
  }
}
