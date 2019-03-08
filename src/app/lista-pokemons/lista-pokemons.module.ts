import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ListaPokemonsPage } from './lista-pokemons.page';

const routes: Routes = [
  {
    path: '',
    component: ListaPokemonsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListaPokemonsPage]
})
export class ListaPokemonsPageModule {}
