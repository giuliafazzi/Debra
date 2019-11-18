import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { RestApiService } from '../rest-api.service';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: "app-evolucao",
  templateUrl: "evolucao.page.html",
  styleUrls: ["evolucao.page.scss"]
})
export class EvolucaoPage {
  publi_cat_atv: any;
  publi_cat_aprende: any;

  aluno_id: string = this.route.snapshot.paramMap.get('aluno_id');
  escola_id: string = this.route.snapshot.paramMap.get('escola_id');

  constructor(public api: RestApiService, 
    public loadingController: LoadingController, 
    public route: ActivatedRoute,
    public router: Router) {}

  perfilaluno() {
    this.router.navigateByUrl("/perfilaluno");
  }

  async getPosts() {
    const loading = await this.loadingController.create();
    await loading.present();
    await this.api.getPostsByCategory(this.escola_id, this.aluno_id, 'atividades executadas')
      .subscribe(res => {
        console.log(res);
        this.publi_cat_atv = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
      await this.api.getPostsByCategory(this.escola_id, this.aluno_id, 'aprende melhor com')
      .subscribe(res => {
        console.log(res);
        this.publi_cat_aprende = res;
        loading.dismiss();
      }, err => {
        console.log(err);
        loading.dismiss();
      });
  }

  ngOnInit() {
    this.getPosts();
  }
}