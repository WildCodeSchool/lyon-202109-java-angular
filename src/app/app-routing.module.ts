import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {PokemonsPageComponent} from './pages/pokemons-page/pokemons-page.component';
import {PokemonDetailPageComponent} from './pages/pokemon-detail-page/pokemon-detail-page.component';

const routes: Routes = [
  {
    path: '',
    component: PokemonsPageComponent
  },
  {
    path: 'details/:pokemonId',
    component: PokemonDetailPageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
