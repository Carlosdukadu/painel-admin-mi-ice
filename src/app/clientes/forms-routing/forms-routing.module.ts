import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { ClientesComponent } from '../clientes/clientes.component';
const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    component: ClientesComponent,
    data: {
      title: 'ClientesComponent'
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
export class FormsRoutingModule { }
