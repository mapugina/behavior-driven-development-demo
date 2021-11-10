import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { PokemonCardComponent } from './pokemon-card.component';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokemonCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the name of the pokemon passed to it', () => {
    // Set the input to some properly formatted data
    component.pokemon = {
      name: 'bulbasaur',
      number: 1
    };
    fixture.detectChanges(); // Call detectChanges to update the view

    // Query the DOM for the name and get the text
    const name = fixture.nativeElement.querySelector('.name')?.textContent;

    // Assert that the name is correct
    expect(name).toBe('bulbasaur');
  });

  it('should display the number of the pokemon passed to it', () => {
    // Set the input to some properly formatted data
    component.pokemon = {
      name: 'bulbasaur',
      number: 1
    };
    fixture.detectChanges(); // Call detectChanges to update the view

    // Query the DOM for the name and get the text
    const dexId = fixture.debugElement.query(By.css('.number'))?.nativeElement?.textContent;

    // Assert that the name is correct
    expect(dexId).toBe('1');
  });


});
