import { Routes } from '@angular/router';
import { PokemonList } from './pokemon-list/pokemon-list';
import { PokemonDetail } from './pokemon-detail/pokemon-detail';

export const routes: Routes = [
  { path: 'pokemon-list', component: PokemonList },
  { path: 'pokemon-detail/:id', component: PokemonDetail }
];
