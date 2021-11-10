import { HttpClientModule } from '@angular/common/http';
import { sandboxOf } from 'angular-playground';
import { PokeAPIService } from '../poke-api.service';
import { PokemonCardComponent } from './pokemon-card.component';

const style = `
.container {
  padding: 50px;
}
`;

const bulbasaur = {
  name: 'bulbasaur',
  number: 1,
  art: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
};

const charmander = {
  name: 'charmander',
  number: 4,
  art: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png',
};

export default sandboxOf(PokemonCardComponent, {
  imports:  [HttpClientModule],
  providers: [PokeAPIService],
})
  .add('default (no pokemon)', {
    template: `<div class="container"><lib-pokemon-card></lib-pokemon-card></div>`,
    styles: [style],
  })
  .add('with charmander', {
    template: `<div class="container"><lib-pokemon-card [pokemon]="pokemon"></lib-pokemon-card></div>`,
    styles: [style],
    context: {
      pokemon: charmander,
    },
  })
  .add('with bulbasaur', {
    template: `<div class="container"><lib-pokemon-card [pokemon]="pokemon"></lib-pokemon-card></div>`,
    styles: [style],
    context: {
      pokemon: bulbasaur,
    },
  }).add('with bulbasaur & content slot', {
    template: `<div class="container"><lib-pokemon-card [pokemon]="pokemon">
      <div>ng-content here</div>
    </lib-pokemon-card></div>`,
    styles: [style],
    context: {
      pokemon: bulbasaur,
    },
  });
