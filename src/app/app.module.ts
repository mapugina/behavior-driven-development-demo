import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PokestuffModule } from 'pokestuff';

import { AppComponent } from './app.component';
import { FizzbuzzPipe } from './fizzbuzz.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FizzbuzzPipe
  ],
  imports: [
    BrowserModule,
    PokestuffModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
