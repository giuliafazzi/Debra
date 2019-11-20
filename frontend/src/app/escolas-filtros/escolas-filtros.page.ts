import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoadingController } from "@ionic/angular";
import { RestApiService } from "../rest-api.service";

@Component({
  selector: "app-escola-filtros",
  templateUrl: "escolas-filtros.page.html",
  styleUrls: ["escolas-filtros.page.scss"]
})
export class EscolasFiltrosPage {
  escolas: any;

  constructor(
    private router: Router,
    public api: RestApiService,
    public loadingController: LoadingController
  ) {}

  alunos() {
    this.router.navigateByUrl("/alunos");
  }

  async getSchools() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.api.getSchools().subscribe(
      res => {
        console.log(res);
        this.escolas = res;
        loading.dismiss();
      },
      err => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  ngOnInit() {
    this.getSchools();
  }
}
