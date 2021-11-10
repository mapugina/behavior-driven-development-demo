import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';


@NgModule({
  declarations: [
    PokemonCardComponent
  ],
  imports: [CommonModule],
  exports: [
    PokemonCardComponent
  ],
})
export class PokestuffModule {}
