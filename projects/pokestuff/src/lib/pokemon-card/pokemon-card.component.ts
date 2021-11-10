import { Component, Input } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PokeAPIService } from '../poke-api.service';

@Component({
  selector: 'lib-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.css']
})
export class PokemonCardComponent {
  @Input() pokemon?: {name: string, number: number, art: string};

  isFlipped = false;
  types$?: Observable<string[]> = undefined;

  constructor(private pokeAPI: PokeAPIService) { }

  /**
   * Requests more info on the pokemon
   */
  requestMoreInfo() {
    // Do nothing on click if pokemon is not set
    if (!this.pokemon) {
      return;
    }

    // Toggle flipped state
    this.isFlipped = !this.isFlipped;

    // Only set extra info the first time
    if (this.types$ === undefined){
      this.types$ = this.pokeAPI.getPokemon(this.pokemon?.number).pipe(
        map(pokemon => pokemon.types.map(type => type?.type?.name))
      );
    }
  }
}
