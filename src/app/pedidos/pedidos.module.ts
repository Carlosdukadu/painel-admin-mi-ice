import { PedidosRoutingModule } from './pedidos-routing/pedidos-routing.module';
import { PedidosComponent } from './pedidos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    PedidosRoutingModule
  ],
  declarations: [ PedidosComponent ],
  providers: []
})
export class PedidosModule { }
