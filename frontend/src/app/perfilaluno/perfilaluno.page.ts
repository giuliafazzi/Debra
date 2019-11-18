import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: "app-perfilaluno",
  templateUrl: "perfilaluno.page.html",
  styleUrls: ["perfilaluno.page.scss"]
})
export class PerfilAlunoPage {
  aluno: any;
  aluno_id: string = this.route.snapshot.paramMap.get('aluno_id');
  escola_id: string = this.route.snapshot.paramMap.get('escola_id');

  constructor(public api: RestApiService, 
    public loadingController: LoadingController, 
    public route: ActivatedRoute,
    public router: Router) {}

  alunos() {
    this.router.navigateByUrl("/alunos");
  }

  evolucao() {
    this.router.navigateByUrl("/evolucao");
  }

  async getStudent() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.api.getStudentById(this.escola_id, this.aluno_id)
      .subscribe(res => {
        console.log(res);
        this.aluno = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  ngOnInit() {
    this.getStudent();
  }
}
