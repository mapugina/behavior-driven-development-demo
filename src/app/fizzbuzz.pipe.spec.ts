import { TestBed } from '@angular/core/testing';
import { FizzbuzzPipe } from './fizzbuzz.pipe';
import { FizzbuzzService } from './fizzbuzz.service';

describe('FizzbuzzPipe in module', () => {
  let pipe: FizzbuzzPipe;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    let service = TestBed.inject(FizzbuzzService);
    pipe = new FizzbuzzPipe(service);
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });


  it('should return fizzbuzz if the number is divisable by 5 and 3', () => {
    expect(pipe.transform(15)).toBe('fizzbuzz');
  });

  it('should return fizz if the number if devisable by 3', () => {
    expect(pipe.transform(3)).toBe('fizz');
  });

  it('should return buzz if the number if divisable by 5', () => {
    expect(pipe.transform(5)).toBe('buzz');
  });

  it('should return the number if not divisable by 5 or 3', () => {
    expect(pipe.transform(1)).toBe(1);
  });
});

describe('FizzbuzzPipe in isolation', () => {
  let pipe: FizzbuzzPipe;
  let service: FizzbuzzService;

  beforeEach(() => {
    service = jasmine.createSpyObj('fizzbuzz spy', {'fizzBuzz': 'fizzbuzz'});
    pipe = new FizzbuzzPipe(service);
  });

  it('should pass the passed in number to FizzBuzzService#fizzbuzz', () => {
    pipe.transform(1);
    expect(service.fizzBuzz).toHaveBeenCalledWith(1);
  });

  it('should return the output of FizzBuzzService#fizzbuzz', () => {
    expect(pipe.transform(1)).toBe('fizzbuzz');
  });
});
