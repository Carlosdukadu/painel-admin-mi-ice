import { Component, OnInit, Input } from '@angular/core';
import { Pedido } from './../../models/Pedido';
import { ActivatedRoute } from '@angular/router';
import { ServiceService } from './../../services/service.service'
import { Endereco } from 'app/Models/Endereco';

@Component({
  selector: 'app-detalhes-pedido',
  templateUrl: './detalhes-pedido.component.html',
  styleUrls: ['./detalhes-pedido.component.css']
})
export class DetalhesPedidoComponent implements OnInit {

  pedido: Pedido;
  pedidoId: number;

  principalEndereco = null;
  usuario;

  @Input() endereco;

  constructor(private cliente : ServiceService, private route: ActivatedRoute) { 
    this.pedidoId = parseInt(this.route.snapshot.paramMap.get('id'));
    this.cliente.getPedido(this.pedidoId).subscribe(
      (dados: Pedido) => {
        console.log(dados)
        this.pedido = dados;

        this.cliente.getEndereco(this.pedido.endereco).subscribe(
          (endereco: Endereco) => {
            this.principalEndereco = endereco;
          }
        )
      }
    )
   }

  ngOnInit(): void {
  }

}
