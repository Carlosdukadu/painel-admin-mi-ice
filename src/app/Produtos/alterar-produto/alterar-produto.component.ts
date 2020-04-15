import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from 'app/services/service.service';
import { Produto } from 'app/Models/Produto';

@Component({
  selector: 'app-alterar-produto',
  templateUrl: './alterar-produto.component.html',
  styleUrls: ['./alterar-produto.component.css']
})
export class AlterarProdutoComponent implements OnInit {

id: number;
produto: Produto;
descricao;
nome;
precoCheio;
precoDesconto;
imagem;
categoria;

  constructor(private router: ActivatedRoute, private service: ServiceService) { 

    this.id = parseInt(this.router.snapshot.paramMap.get('id'));

    service.getProduto(this.id).subscribe((data) => {
      this.produto = data
    })
  
  }

  ngOnInit(): void {
  }


  mudar(){
    
    
    if(this.nome != null){
      this.produto.nome = this.nome
    }

    if(this.descricao != null){
      this.produto.descricao = this.descricao
    }

    if(this.precoCheio != null){
      this.produto.precoCheio = this.precoCheio
    }

    if(this.precoDesconto != null){
      this.produto.precoDesconto = this.precoDesconto
    }

    if(this.imagem != null){
      this.produto.imagem = this.imagem
    }
    
    if(this.categoria != null){
      this.produto.categoria = this.categoria
    }

    this.service.alterarProduto(this.produto).subscribe((data) => {
      console.log(data)
    })

  }

}

