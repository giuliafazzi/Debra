import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-escolas",
  templateUrl: "escolas.page.html"
})
export class EscolasPage {
  constructor(private router: Router) {}

  alunos() {
    this.router.navigateByUrl("/alunos");
  }
}
