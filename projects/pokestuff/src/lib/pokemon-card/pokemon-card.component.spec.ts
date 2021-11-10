import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { ListPokemon } from '../ListPokemon';
import { PokeAPIService } from '../poke-api.service';
import { PokemonDetails } from '../PokemonDetails';

import { PokemonCardComponent } from './pokemon-card.component';

describe('PokemonCardComponent', () => {
  let component: PokemonCardComponent;
  let fixture: ComponentFixture<PokemonCardComponent>;
  let pokeAPIspy;
  let pokemon: ListPokemon;

  beforeEach(async () => {
    pokeAPIspy = jasmine.createSpyObj('PokeAPI', {
      getPokemon: of<PokemonDetails>({
        types: [{ type: { name: 'grass' } }, { type: { name: 'poison' } }],
      }),
    });
    await TestBed.configureTestingModule({
      declarations: [PokemonCardComponent],
      providers: [{provide: PokeAPIService, useValue: pokeAPIspy}]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    pokemon = {
      url: '',
      name: 'bulbasaur',
      number: 1,
      art: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png'
    };
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the name of the pokemon passed to it', () => {
    // Set the input to some properly formatted data
    component.pokemon = pokemon;
    fixture.detectChanges(); // Call detectChanges to update the view

    // Query the DOM for the name and get the text
    const name = fixture.nativeElement.querySelector('.name')?.textContent;

    // Assert that the name is correct
    expect(name).toBe('bulbasaur');
  });

  it('should display the number of the pokemon passed to it', () => {
    // Set the input to some properly formatted data
    component.pokemon = pokemon;
    fixture.detectChanges(); // Call detectChanges to update the view

    // Query the DOM for the name and get the text
    const dexId = fixture.debugElement.query(By.css('.number'))?.nativeElement
      ?.textContent;

    // Assert that the name is correct
    expect(dexId).toBe('1');
  });

  describe('when clicked', () => {
    let types: Array<string | null>;
    beforeEach(async () => {
      // Set the input to some properly formatted data
      component.pokemon = pokemon;
      fixture.detectChanges(); // Call detectChanges to update the view

      // Simulate a click on the front
      const frontDe = fixture.debugElement.query(By.css('.front'));
      frontDe.triggerEventHandler('click', null);

      fixture.detectChanges(); // Call detectChanges to update the view
      await fixture.whenStable(); // Let the detectedChanges stablize
      fixture.detectChanges(); // Call detectChanges to update the view

      // Query for types
      const typeEls:  HTMLElement[] = fixture.nativeElement.querySelectorAll('.type');
      types = Array.from(typeEls).map(el => el?.textContent);
    });

    it('should have two types after click', async () => {
      // Query for types
      expect(types?.length).toBe(2);
    });

    it('should have grass as the first type', () => {
      expect(types?.[0]).toBe('grass');
    });

    it('should have poison as the second type', () => {
      expect(types?.[1]).toBe('poison');
    });
  });
});
