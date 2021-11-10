import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ListPokemon } from './ListPokemon';
import { PokemonDetails } from './PokemonDetails';

@Injectable({
  providedIn: 'root',
})
export class PokeAPIService {
  private baseUrl = 'https://pokeapi.co/api/v2/pokemon/';

  constructor(private http: HttpClient) {}

  /**
   *
   * @param id The name or id of the pokemon to get info about
   */
  getPokemon(id: number | string) {
    return this.http.get<PokemonDetails>(this.baseUrl + id);
  }

  /**
   * Get pokemon from the pokeAPI
   * @param amount The amount of pokemon to get
   */
  queryPokemon(amount = 150): Observable<ListPokemon[]> {
    return this.http
      .get<{ results: { name: string }[] }>(this.baseUrl + '?limit=' + amount)
      .pipe(
        map((res) =>
          res.results.map((pokemon, index) => ({
            name: pokemon.name,
            number: index + 1,
            url: this.baseUrl + pokemon.name,
            art: `//raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${index + 1}.png`
          }))
        )
      );
  }
}
