import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoPrincipalComponent } from './encabezado-principal/encabezado-principal.component';
import { LoadingComponent } from './loading/loading.component';



@NgModule({
  declarations: [
    EncabezadoPrincipalComponent,
    LoadingComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    EncabezadoPrincipalComponent,
    LoadingComponent
  ]
})
export class SharedModule { }
