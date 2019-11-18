import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  aluno_id: string = this.route.snapshot.paramMap.get('aluno_id');
  escola_id: string = this.route.snapshot.paramMap.get('escola_id');

  constructor(public route: ActivatedRoute,
    public router: Router) { }

  ngOnInit() {
  }

}
