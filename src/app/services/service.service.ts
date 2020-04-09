import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'app/Models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) { }

  public adcProdutos(p: Produto){
    let produtoNovo = {
      nome: p.nome,
      descricao: p.descricao,
      imagem: "assets/" + p.imagem.slice(12, p.imagem.length),
      categoria:{
        idCategoria: p.categoria
      },
      precoCheio: p.precoCheio,
      precoDesconto: p.precoDesconto
    }
  return this.http.post("http://localhost:8080/ecommerce/criar-produto", produtoNovo)
  }
}
