import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon'; // pas ext car ts va compiler
import { POKEMONS } from './mock-pokemons';

@Component({ // indiquer qu'une classe est un composant
  selector: 'pokemon-app',
 templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit { 
  pokemons: Pokemon[] = null; // propr pokemons, typée comme 
                              // tab.de type Pokemon
  ngOnInit() { // initializing input properties
      this.pokemons = POKEMONS;
  }
  selectPokemon(pokemon: Pokemon) { // objet de type pokemon
    console.log("Vous avez sélectionné " + pokemon.name);
  }
}
