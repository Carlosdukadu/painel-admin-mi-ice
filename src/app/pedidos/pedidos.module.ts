import { PedidosRoutingModule } from './pedidos-routing/pedidos-routing.module';
import { PedidosComponent } from './pedidos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesPedidoComponent } from './detalhes-pedido/detalhes-pedido.component';

@NgModule({
  imports: [
    CommonModule,
    PedidosRoutingModule
  ],
  declarations: [ PedidosComponent, DetalhesPedidoComponent ],
  providers: []
})
export class PedidosModule { }
