import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { TiposPokemonsPage } from './tipos-pokemons.page';

const routes: Routes = [
  {
    path: '',
    component: TiposPokemonsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TiposPokemonsPage]
})
export class TiposPokemonsPageModule {}
