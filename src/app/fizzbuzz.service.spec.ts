import { TestBed } from '@angular/core/testing';

import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzService', () => {
  let service: FizzbuzzService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FizzbuzzService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return fizzbuzz if the number is divisable by 5 and 3', () => {
    expect(service.fizzBuzz(15)).toBe('fizzbuzz');
  });

  it('should return fizz if the number if devisable by 3', () => {
    expect(service.fizzBuzz(3)).toBe('fizz');
  });

  it('should return buzz if the number if divisable by 5', () => {
    expect(service.fizzBuzz(5)).toBe('buzz');
  });

  it('should return the number if not divisable by 5 or 3', () => {
    expect(service.fizzBuzz(1)).toBe(1);
  });
});
