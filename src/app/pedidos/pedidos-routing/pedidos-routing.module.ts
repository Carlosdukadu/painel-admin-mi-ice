import { PedidosComponent } from './../pedidos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: PedidosComponent,
    data: {
      title: 'Pedidos Works'
    }
  },{
    path: 'subpage',
    pathMatch: 'full',
    component: PedidosComponent,
    data: {
      title: 'Subpage Pedidos Works'
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PedidosRoutingModule { }
