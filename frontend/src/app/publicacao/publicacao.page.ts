import { Component, OnInit } from "@angular/core";
import { LoadingController } from "@ionic/angular";
import { RestApiService } from "../rest-api.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-publicacao",
  templateUrl: "./publicacao.page.html",
  styleUrls: ["./publicacao.page.scss"]
})
export class PublicacaoPage implements OnInit {
  aluno_id: string = this.route.snapshot.paramMap.get("aluno_id");
  escola_id: string = this.route.snapshot.paramMap.get("escola_id");
  categoria: string = this.route.snapshot.queryParamMap.get("categoria");
  data: any = {
    content: "",
    category: this.categoria
  };

  constructor(
    public api: RestApiService,
    public loadingController: LoadingController,
    private route: ActivatedRoute,
    public router: Router
  ) {}

  async createPost() {
    console.log(this.data);
    await this.api
      .createPost(this.data, this.escola_id, this.aluno_id)
      .subscribe(
        res => {
          this.router.navigate([
            `/escolas/${this.escola_id}/alunos/${this.aluno_id}/evolucao`
          ]);
        },
        err => {
          console.log(err);
        }
      );
  }

  ngOnInit() {}
}
