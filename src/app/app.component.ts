import { Component } from '@angular/core';
import { OnInit } from '@angular/core';

import { Pokemon } from './pokemon'; // pas ext car ts va compiler
import { POKEMONS } from './mock-pokemons';

@Component({
  selector: 'pokemon-app',
  template: `<h1>Bonjour... {{name}}</h1>`,
})
export class AppComponent implements OnInit { 
  name = 'Angular'; 

  private pokemons: Pokemon[]; 
  // propr pokemons, typée comme tab.de type Pok

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
      this.pokemons = POKEMONS;
  }
}
