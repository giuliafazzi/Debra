import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VerprofessoresPage } from './verprofessores.page';

const routes: Routes = [
  {
    path: '',
    component: VerprofessoresPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VerprofessoresPage]
})
export class VerprofessoresPageModule {}
