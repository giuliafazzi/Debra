import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { RestApiService } from "../rest-api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-alunos",
  templateUrl: "alunos.page.html",
  styleUrls: ["alunos.page.scss"]
})
export class AlunosPage {
  alunos: any;
  classes: any;
  escola_id: string = this.route.snapshot.paramMap.get("escola_id");
  alunos_filtro: any;
  classes_filtro: any;
  nome: string;

  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    public route: ActivatedRoute,
    public router: Router
  ) {}

  escolas() {
    this.router.navigateByUrl("/escolas");
  }

  perfilaluno() {
    this.router.navigateByUrl("/perfilaluno");
  }

  async getStudents() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.api.getStudents(this.escola_id).subscribe(
      res => {
        console.log(res);
        this.alunos = res;
        this.alunos_filtro = res;
        loading.dismiss();
      },
      err => {
        console.log(err);
        loading.dismiss();
      }
    );
  }

  filtrarNomes() {
    this.alunos_filtro = this.alunos.filter(aluno =>
      aluno.name.toUpperCase().includes(this.nome.toUpperCase())
    );
  }

  ngOnInit() {
    this.getStudents();
  }
}
