import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import {PokemonAPIService} from '../api/pokemon-api.service';

@Injectable({
  providedIn: 'root'
})
export class PokemonResolver implements Resolve<boolean> {
  constructor(private pokemonApi: PokemonAPIService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.pokemonApi.findById(route.params.pokemonId);
  }
}
