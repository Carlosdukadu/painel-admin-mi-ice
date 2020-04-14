import { CategoriasComponent } from './../categorias.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{
    path: '',
    pathMatch: 'full',
    component: CategoriasComponent,
    data: {
      title: 'Tables Works'
    }
  },{
    path: 'subpage',
    pathMatch: 'full',
    component: CategoriasComponent,
    data: {
      title: 'Subpage Tables Works'
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriasModule { }
