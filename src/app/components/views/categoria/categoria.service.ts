import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from './categoria.model';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {

  baseUrl: String = environment.baseUrl;

  constructor(private http: HttpClient, private _snack: MatSnackBar) {}

  //MÉTODO PARA LISTAR CATEGORIAS
    findAll():Observable<Categoria[]> {
      const url = `${this.baseUrl}/categorias`
      return this.http.get<Categoria[]>(url)
    }

    findById(id: string): Observable<Categoria> {
      const url = `${this.baseUrl}/categorias/${id}` //para colocar a variável de id 
      return this.http.get<Categoria>(url); // irá buscar uma categoria por meio do seu id
    } 

    //MÉTODO PARA CIRAR UMA NOVA CATEGORIA
    create(categoria: Categoria): Observable<Categoria> {
      const url = `${this.baseUrl}/categorias`
      return this.http.post<Categoria>(url, categoria);
    }

    //MÉTODO PARA DELETAR
    delete(id: String): Observable<void> {
      const url = `${this.baseUrl}/categorias/${id}`
      return this.http.delete<void>(url);
    }

    update(categoria: Categoria): Observable<void> {
      const url = `${this.baseUrl}/categorias/${categoria.id}`
      return this.http.put<void>(url, categoria)
    }

    //Mensagem que irá aparecer como um PopUp na tela para diversas funcionalidades
    mensagem(str: String): void {
      this._snack.open(`${str}`, 'OK', {
        horizontalPosition: 'end',
        verticalPosition: 'top',
        duration: 3000
      })
    }

}
