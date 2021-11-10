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
