import { Component, OnInit } from '@angular/core';
import { Pedido } from 'app/models/Pedido';
import { ServiceService } from 'app/services/service.service';
import { ClientesService } from 'app/services/clientes.service';
import { Cliente } from 'app/models/Cliente';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  pedidos: Pedido[] = []
  clientes: Cliente[] = [];
  totalClientes: number = 0
  totalVendas: number = 0
  totalPedidos: number = 0

  constructor(private service: ServiceService, private cliente: ClientesService) {
     this.buscarPedidos();
     this.buscarClientes();
      
    }

  ngOnInit() {
  }

  buscarPedidos() {
    this.service.buscarPedidos().subscribe((data: Pedido[]) => {
      this.pedidos = data 
      this.totalPedidos = this.pedidos.length
      this.pedidos.forEach(pedidos => {
        if(pedidos.status != "CANCELADO"){
          this.totalVendas += pedidos.vlTotal
        }
      });     
    }), () => {
      console.log("Erro inesperado na requisção dos produtos");
    }
  }

  buscarClientes(){
    this.cliente.buscarClientes().subscribe(
      (dados: Cliente[]) => {
        console.log(dados)
        this.clientes = dados;
        this.totalClientes = this.clientes.length
      }
    )
  }

}
