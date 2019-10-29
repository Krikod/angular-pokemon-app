import { Component, OnInit } from '@angular/core';

import { Pokemon } from './pokemon'; // pas ext car ts va compiler
import { POKEMONS } from './mock-pokemons';

@Component({ // indiquer qu'une classe est un composant
  selector: 'pokemon-app',
 templateUrl: './app/app.component.html'
})
export class AppComponent implements OnInit { 
  private pokemons: Pokemon[] = null; // propr pokemons, typée comme 
  private title:string = "Liste des Pokémons";// tab.de type Pokemon
  private value:string = '';

  ngOnInit() { // initializing input properties
      this.pokemons = POKEMONS;
  }

  onClick() {
    console.log("Clic !");
  }

  onKey(value: string) {
    this.value = 'Bonjour ' + value;
  } // event.target renvoie à un html input element

  selectPokemon(pokemon: Pokemon) { // objet de type pokemon
    console.log("Vous avez sélectionné " + pokemon.name);
  }
}
