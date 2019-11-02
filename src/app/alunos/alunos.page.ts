import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-alunos",
  templateUrl: "alunos.page.html"
})
export class AlunosPage {
  constructor(private router: Router) {}

  escolas() {
    this.router.navigateByUrl("/escolas");
  }

  perfilaluno() {
    this.router.navigateByUrl("/perfilaluno");
  }
}
