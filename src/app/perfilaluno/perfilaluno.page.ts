import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-perfilaluno",
  templateUrl: "perfilaluno.page.html",
  styleUrls: ["perfilaluno.page.scss"]
})
export class PerfilAlunoPage {
  constructor(private router: Router) {}

  alunos() {
    this.router.navigateByUrl("/alunos");
  }

  evolucao() {
    this.router.navigateByUrl("/evolucao");
  }
}
