import { AlterarCategoriaComponent } from '../alterar-categoria.component'
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: AlterarCategoriaComponent,
    data: {
      title: 'Alterar Categoria Works'
    }
  },{
    path: 'subpage',
    pathMatch: 'full',
    component: AlterarCategoriaComponent,
    data: {
      title: 'Subpage Categoria Works'
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlterarCategoriaModule { }
