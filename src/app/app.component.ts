import { Component } from '@angular/core';
import { PokeAPIService } from 'pokestuff';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  pokemons$ = this.pokeAPI.queryPokemon();

  constructor(private pokeAPI: PokeAPIService) {}
}
