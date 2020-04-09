import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TablesComponent } from './tables.component';
import { TablesRoutingModule } from './tables-routing/tables-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    TablesRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [ TablesComponent ]
})
export class TablesModule { }
