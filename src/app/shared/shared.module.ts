import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoPrincipalComponent } from './encabezado-principal/encabezado-principal.component';



@NgModule({
  declarations: [
    EncabezadoPrincipalComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EncabezadoPrincipalComponent
  ]
})
export class SharedModule { }
