import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  {
    path: "home",
    loadChildren: () => import("./home/home.module").then(m => m.HomePageModule)
  },
  {
    path: "login",
    loadChildren: () =>
      import("./login/login.module").then(m => m.LoginPageModule)
  },
  {
    path: "cadastro",
    loadChildren: () =>
      import("./cadastro/cadastro.module").then(m => m.CadastroPageModule)
  },
  {
    path: "escolas",
    loadChildren: () =>
      import("./escolas/escolas.module").then(m => m.EscolasPageModule)
  },
  {
    path: "alunos",
    loadChildren: () =>
      import("./alunos/alunos.module").then(m => m.AlunosPageModule)
  },
  {
    path: "perfilaluno",
    loadChildren: () =>
      import("./perfilaluno/perfilaluno.module").then(
        m => m.PerfilAlunoPageModule
      )
  },
  {
    path: "evolucao",
    loadChildren: () =>
      import("./evolucao/evolucao.module").then(m => m.EvolucaoPageModule)
  },
  { path: 'publicacao', loadChildren: './publicacao/publicacao.module#PublicacaoPageModule' },
  { path: 'infos', loadChildren: './infos/infos.module#InfosPageModule' },
  { path: 'addescolas', loadChildren: './addescolas/addescolas.module#AddescolasPageModule' },
  { path: 'categorias', loadChildren: './categorias/categorias.module#CategoriasPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
