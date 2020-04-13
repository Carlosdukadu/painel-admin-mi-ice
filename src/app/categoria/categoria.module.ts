import { NgModule } from '@angular/core';
import { CategoriaRoutingModule } from './categoria-routing/categoria-routing.module';
import { CategoriaComponent } from './categoria.component';


@NgModule({
  imports: [
    CategoriaRoutingModule
  ],
  declarations: [ CategoriaComponent ],
  providers: []
})
export class CategoriaModule { }
