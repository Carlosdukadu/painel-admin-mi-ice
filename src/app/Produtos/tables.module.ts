import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing/tables-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AlterarProdutoComponent } from './alterar-produto/alterar-produto.component';

@NgModule({
  imports: [
    CommonModule,
    TablesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ TablesComponent, AlterarProdutoComponent ]
})
export class TablesModule { }
