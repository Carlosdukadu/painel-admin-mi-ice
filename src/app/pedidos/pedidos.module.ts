import { PedidosRoutingModule } from './pedidos-routing/pedidos-routing.module';
import { PedidosComponent } from './pedidos.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetalhesPedidoComponent } from './detalhes-pedido/detalhes-pedido.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; // Importação
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    PedidosRoutingModule,
    Ng2SearchPipeModule,
    ReactiveFormsModule,
    FormsModule,

  ],
  declarations: [ PedidosComponent, DetalhesPedidoComponent ],
  providers: []
})
export class PedidosModule { }