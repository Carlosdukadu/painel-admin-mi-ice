import { PedidosRoutingModule } from './pedidos-routing/pedidos-routing.module';
import { PedidosComponent } from './pedidos.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    PedidosRoutingModule
  ],
  declarations: [ PedidosComponent ],
  providers: []
})
export class PedidosModule { }
