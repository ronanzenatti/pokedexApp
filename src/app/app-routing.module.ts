import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'lista-pokemons', loadChildren: './lista-pokemons/lista-pokemons.module#ListaPokemonsPageModule' },
  { path: 'tipos-pokemons', loadChildren: './tipos-pokemons/tipos-pokemons.module#TiposPokemonsPageModule' },
  { path: 'bulbasaur', loadChildren: './pokemons/bulbasaur/bulbasaur.module#BulbasaurPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
