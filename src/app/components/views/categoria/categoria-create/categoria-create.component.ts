import { Router } from '@angular/router';
import { Categoria } from './../categoria.model';
import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-categoria-create',
  templateUrl: './categoria-create.component.html',
  styleUrls: ['./categoria-create.component.css']
})
export class CategoriaCreateComponent implements OnInit {

  categoria: Categoria = {
    nome: '',
    descricao: ''
  }

  constructor(private service: CategoriaService, private router: Router) { }

  ngOnInit(): void {
  }

  //Chamando o método create e criando novas Categorias
  create(): void {
    this.service.create(this.categoria).subscribe((resposta) =>{
      this.router.navigate(['categorias'])//quando criar a categoria irá retornar para a página de findAll
      this.service.mensagem('CATEGORIA CRIADA COM SUCESSO!');//quando criar a categoria irá aparecer um popup na tela
    }, err =>{
      for(let i = 0; i < err.error.errors.length; i++){
        this.service.mensagem(err.error.errors[i].message)
      }// for criado para percorrer o vetor de erro e quando ocorrer o erro ele irá mostrar a mensagem (ele irá mostrar a mensagem de acordo com a posição do i)
    })
  }

  cancel(): void {
    this.router.navigate(['categorias'])
  }

}
