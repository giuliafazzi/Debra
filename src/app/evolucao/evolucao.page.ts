import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-evolucao",
  templateUrl: "evolucao.page.html"
})
export class EvolucaoPage {
  constructor(private router: Router) {}

  perfilaluno() {
    this.router.navigateByUrl("/perfilaluno");
  }
}
