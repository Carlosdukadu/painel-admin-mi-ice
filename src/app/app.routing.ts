import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlankTemplateComponent} from './template/blank-template.component';
import {LeftNavTemplateComponent} from './template/left-nav-template.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { DetalhesPedidoComponent } from './pedidos/detalhes-pedido/detalhes-pedido.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: '',
  component: LeftNavTemplateComponent,
  data: {
    title: ''
  },
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      data: {
        title: 'Dashboard'
      },
    },
    
    {
      path: 'clientes',
      loadChildren: () => import('./clientes/forms.module').then(m => m.FormsModule),
      data: {
        title: 'Form Page'
      },
    },
    {
      path: 'pedidos',
      loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosModule),
      data: {
        title: 'Pedidos'
      },
    },
    {
      path: 'detalhes-pedido',
      component: DetalhesPedidoComponent,
      data: {
        title: 'Detalhes do Pedido'
      },
    },
    {
      path: 'categoria',
      loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule),
      data: {
        title: 'Categoria'
      },
    },
  ]

  
},
  // {
//   path: 'pedidos',
//   component: LeftNavTemplateComponent,
//   data: {
//     title: 'pedidos'
//   },
//   children: [
//     {
//       path: '',
//       loadChildren: () => import('./pedidos/pedidos.module').then(m => m.PedidosModule)
//     }
//   ]
// },


{
  path: 'produtos',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Cadastrar Novo Produto'
  },
  children: [
    {
      path: '',
      loadChildren: () => import('./Produtos/tables.module').then(m => m.TablesModule)
    }
  ]
}, {
  path: '**',
  component: PageNotFoundComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
