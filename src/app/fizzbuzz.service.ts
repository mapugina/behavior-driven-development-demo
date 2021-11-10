import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FizzbuzzService {

  constructor() { }

  fizzBuzz(num: number): number | 'fizz' | 'buzz' | 'fizzbuzz' {
        if (num % 15 === 0) {
        return 'fizzbuzz';
    }
    if (num % 3 === 0) {
        return 'fizz';
    }
    if (num % 5 === 0) {
        return 'buzz';
    }
    return num;
  }
}
