import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'app/services/service.service';
import { Pedido } from 'app/Models/Pedido';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[] = []
  formStatus: FormGroup
  status: any
  filter: string;

  constructor(private service: ServiceService, private fb: FormBuilder, private router: Router) {
    this.buscarPedidos()
  }

  buscarPedidos() {
    this.service.buscarPedidos().subscribe((data: Pedido[]) => {
      this.pedidos = data      
    }), () => {
      console.log("Erro inesperado na requisção dos produtos");
    }
  }

  statusPedido(pedido){
    let ctz = confirm("Um email será enviado ao cliente com a atualização do pedido")
    if(ctz){
      pedido.status = this.status
      this.service.alterarStatus(pedido).subscribe(()=>{
        console.log("acho que agora vai");
      })
      }
      console.log(this.status);
      
    }

    pedidoSelecionado(pedido) {
      this.router.navigate(['/detalhes-pedido', pedido])
    }

  ngOnInit(): void {
  }

}
