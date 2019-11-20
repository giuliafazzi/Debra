import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { IonicModule } from "@ionic/angular";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { EscolasFiltrosPage } from "./escolas-filtros.page";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: "",
        component: EscolasFiltrosPage
      }
    ])
  ],
  declarations: [EscolasFiltrosPage]
})
export class EscolasFiltrosPageModule {}
