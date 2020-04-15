import { AlterarProdutoComponent } from '../alterar-produto.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: AlterarProdutoComponent,
    data: {
      title: 'Alterar Produto Works'
    }
  },{
    path: 'subpage',
    pathMatch: 'full',
    component: AlterarProdutoComponent,
    data: {
      title: 'Subpage Produto Works'
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlterarProdutoModule { }
