import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { EsqueceusenhaPage } from './esqueceusenha.page';

const routes: Routes = [
  {
    path: '',
    component: EsqueceusenhaPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [EsqueceusenhaPage]
})
export class EsqueceusenhaPageModule {}
