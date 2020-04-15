import { NgModule } from '@angular/core';
import { FormsRoutingModule } from './forms-routing/forms-routing.module';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter'; // Importação
import { FormsModule } from '@angular/forms';
import { ClientesComponent } from './clientes/clientes.component';




@NgModule({
  imports: [
    FormsRoutingModule,
    CommonModule,
    Ng2SearchPipeModule,
    FormsModule
  ],
  declarations: [ ClientesComponent ],
  providers: []
})
export class ClientesModule { }
