import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-cadastro",
  templateUrl: "cadastro.page.html"
})
export class CadastroPage {
  constructor(private router: Router) {}

  home() {
    this.router.navigateByUrl("/home");
  }

  escolas() {
    this.router.navigateByUrl("/escolas");
  }
}
