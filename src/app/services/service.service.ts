import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'app/Models/Produto';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) { }

  buscarProdutos(){
    return this.http.get("api/produto/lista")
  }

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
  return this.http.post("api/criar-produto", produtoNovo)
  }

  removerProduto(idProduto){
    return this.http.delete("api/produto/" + idProduto)
  }
}
