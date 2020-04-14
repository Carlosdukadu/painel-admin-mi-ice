import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlankTemplateComponent} from './template/blank-template.component';
import {LeftNavTemplateComponent} from './template/left-nav-template.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

export const routes: Routes = [{
  path: '',
  redirectTo: 'dashboard',
  pathMatch: 'full'
}, {
  path: '',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Angular Admin Template'
  },
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      data: {
        title: 'Dashboard Page'
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
        title: 'Pedidos Page'
      },
    },
      {
        path: 'categorias',
        loadChildren: () => import('./categorias/categorias-routing/categorias-routing.module').then(m => m.CategoriasModule),
        data: {
          title: 'Categorias Page'
        }
    },
    {
      path: 'alterar-categoria/:id',
      loadChildren: () => import('./categorias/alterar-categoria/alterar-categoria-routing/alterar-categoria-routing.module').then(m => m.AlterarCategoriaModule),
      data: {
        title: 'Alteração de Categorias Page'
      }
  }
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
    title: 'Tables'
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
