import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-alunos",
  templateUrl: "alunos.page.html",
  styleUrls: ["alunos.page.scss"]
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
