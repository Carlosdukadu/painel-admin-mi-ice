import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { CategoriaComponent } from '../categoria.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: CategoriaComponent,
    data: {
      title: 'Categoria Works'
    }
  }
];
@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [
      RouterModule
    ]
})
export class CategoriaRoutingModule { }
