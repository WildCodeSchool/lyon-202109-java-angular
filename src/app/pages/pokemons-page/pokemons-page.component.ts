import { Component, OnInit } from '@angular/core';
import {PokemonAPIService} from '../../api/pokemon-api.service';

@Component({
  selector: 'app-pokemons-page',
  templateUrl: './pokemons-page.component.html',
  styleUrls: ['./pokemons-page.component.css']
})
export class PokemonsPageComponent implements OnInit {
  pokemons = [];

  constructor(private pokemonApi: PokemonAPIService) { }

  ngOnInit(): void {
    this.pokemonApi.searchAll().subscribe(response => {
      console.log(response);
      this.pokemons = response.data;
    });
  }

  search(terms: string): void {
    this.pokemonApi.searchTerms(terms).subscribe(response => {
      console.log(response);
      this.pokemons = response.data;
    });
  }
}
