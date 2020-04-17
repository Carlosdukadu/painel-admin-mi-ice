import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'app/Models/Produto';
import { Pedido } from 'app/Models/Pedido';
import { Endereco } from 'app/Models/Endereco';
import { map } from "rxjs/operators";

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

  buscarPedidos(){
    return this.http.get("api/pedidos/lista")
  }

  alterarStatus(pedido: Pedido){
    return this.http.put("api/pedido/status", pedido)
  }

  public getPedido(id: number){
    let url = this.http.get<Pedido>("http://localhost:8080/ecommerce/pedido/selecionado/" + id);
    return url.pipe(
      map(
        data => data
      )
    )
  }

  public getEndereco(id: number){
    let url = this.http.get<Endereco>("http://localhost:8080/ecommerce/endereco/selecionado/" + id);
    return url.pipe(
      map(
        data => data
      )
    )
  }
  
}
