import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing/tables-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlterarProdutoComponent } from './alterar-produto/alterar-produto.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; // Importação

@NgModule({
  imports: [
    CommonModule,
    TablesRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  declarations: [ TablesComponent, AlterarProdutoComponent ]
})
export class TablesModule { }
