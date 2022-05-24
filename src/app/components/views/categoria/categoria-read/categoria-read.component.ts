import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../categoria.service';
import { Categoria } from '../categoria.model';

@Component({
  selector: 'app-categoria-read',
  templateUrl: './categoria-read.component.html',
  styleUrls: ['./categoria-read.component.css']
})
export class CategoriaReadComponent implements OnInit {
  
  categorias: Categoria[] = []  // Array de categoria (que já recebe um array vazio)

  displayedColumns: string[] = ['id', 'nome', 'descricao','livros', 'acoes'];
  
  constructor(private service: CategoriaService) { }
  
  //sempre que a aplicação for carregada ele irá chamar os métodos que estão dentro
  ngOnInit(): void {
    this.findAll();
  }
  
  findAll() {
    this.service.findAll().subscribe(resposta =>{
      console.log(resposta);
      this.categorias = resposta;
    })
  }
}
