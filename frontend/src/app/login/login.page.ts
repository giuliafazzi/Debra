import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "login.page.html",
  styleUrls: ["login.page.scss"]
})
export class LoginPage {
  constructor(private router: Router) {}

  home() {
    this.router.navigateByUrl("/home");
  }

  escolas() {
    this.router.navigateByUrl("/escolas");
  }
}
