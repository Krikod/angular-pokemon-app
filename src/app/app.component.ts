import { Component } from '@angular/core';
import { Pokemon } from './pokemon'; // pas ext car ts va compiler

@Component({
  selector: 'pokemon-app',
  template: `<h1>Bonjour... {{name}}</h1>`,
})
export class AppComponent  { 
  name = 'Angular'; 

  private pokemons: Pokemon[]; 
  // propr pokemons, typée comme tab.de type Pok
}
