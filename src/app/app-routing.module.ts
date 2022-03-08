import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonsPageComponent} from './pages/pokemons-page/pokemons-page.component';
import {PokemonDetailPageComponent} from './pages/pokemon-detail-page/pokemon-detail-page.component';
import {PokemonResolver} from './resolvers/pokemon.resolver';
import {IsAuthenticatedGuard} from './guards/is-authenticated.guard';

const routes: Routes = [
  {
    path: '',
    component: PokemonsPageComponent
  },
  {
    path: 'details/:pokemonId',
    component: PokemonDetailPageComponent,
    canActivate: [IsAuthenticatedGuard],
    resolve: {
      pokemon: PokemonResolver,
    }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
