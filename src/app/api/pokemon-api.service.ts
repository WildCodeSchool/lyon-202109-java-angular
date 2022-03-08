import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonAPIService {

  private static BASE_URL = 'https://api.pokemontcg.io/v2';

  constructor(private http: HttpClient) { }

  /**
   * Search pokemons through the api.
   */
  searchAll(): Observable<any> {
    return this.http.get(`${PokemonAPIService.BASE_URL}/cards?page=1&pageSize=20`);
  }

  searchTerms(terms: string): Observable<any> {
    return this.http.get(`${PokemonAPIService.BASE_URL}/cards?q=name:${terms}&page=1&pageSize=20`);
  }

  findById(pokemonId: string): Observable<any> {
    return this.http.get(`${PokemonAPIService.BASE_URL}/cards/${pokemonId}`);
  }
}
