import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from 'app/Models/Produto';
import { Pedido } from 'app/Models/Pedido';
import { Observable } from 'rxjs';
import { Categoria } from 'app/Models/Categoria';
import { FormGroup } from '@angular/forms';
import { Endereco } from 'app/Models/Endereco';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(public http: HttpClient) { }

  buscarProdutos() {
    return this.http.get("http://localhost:8080/ecommerce/produto/lista")
  }

  
  buscarCategorias() {
    return this.http.get("http://localhost:8080/ecommerce/categoria/lista")
  }

  public adcProdutos(p: Produto) {
    let produtoNovo = {
      nome: p.nome,
      descricao: p.descricao,
      imagem: p.imagem,
      categoria: p.categoria,
      precoCheio: p.precoCheio,
      precoDesconto: p.precoDesconto
    }
    return this.http.post("http://localhost:8080/ecommerce/criar-produto/", produtoNovo)
  }

  removerProduto(idProduto) {
    return this.http.delete("http://localhost:8080/ecommerce/produto/" + idProduto)
  }

  removerCategoria(idCategoria) {
    return this.http.delete("http://localhost:8080/ecommerce/categoria/" + idCategoria)
  }

  public getProduto(idProduto: number): Observable<any> {
    return this.http.get("http://localhost:8080/ecommerce/produto/" + idProduto)
  }

  public getCategoria(idCategoria: number): Observable<any> {
    return this.http.get("http://localhost:8080/ecommerce/categoria/" + idCategoria)
  }

  public alterarCategoria(c: Categoria) {
    return this.http.put("http://localhost:8080/ecommerce/alterar-categoria/", c);

  }

  public alterarProduto(p: Produto) {
    return this.http.put("http://localhost:8080/ecommerce/alterar-produto/", p);

  }


  public adicionarCategoria(c : Categoria){
    let cat = {
      descricao: c.descricao
    }
    return this.http.post("http://localhost:8080/ecommerce/categoria", cat)
  }

  public atualizarProduto(produto: Produto) {

    return this.http.put("http://localhost:8080/ecommerce/produtos/", produto)

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
