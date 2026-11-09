import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class ProdutoService {
  
  readonly apiUrl = "http://localhost:3000/produtos";
  constructor(private http: HttpClient) { }
  cadastrarProduto(produto: Produto): Observable<Produto> {
    return this.http.post<Produto>(this.apiUrl, produto);
    }

    listarProdutos(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.apiUrl);
    } 

    atualizarProduto(id : number, produto: Produto): Observable<Produto> {
      return this.http.put<Produto>(`${this.apiUrl}/${id}`, produto);
    }
    
    deletarProduto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
    }
}

export interface Produto {
 id: number;
 nome: string;
 preco: number; 
 categoria: string;
 descricao?: string;
};
