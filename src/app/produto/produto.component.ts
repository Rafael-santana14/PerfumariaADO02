import { Component } from '@angular/core';
import { Produto, ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-produto',
  imports: [],
  templateUrl: './produto.component.html',
  styleUrl: './produto.component.css'
})
export class ProdutoComponent {

  produtos: Produto[] = [];

  constructor(private produtoService: ProdutoService) {}

  carregarProdutos() {
    this.produtoService.listarProdutos().subscribe({
      next: (resposta) => {
        this.produtos = resposta;
      },
      error: (erro) => {
        console.log(erro);
      }
    });
  }
}