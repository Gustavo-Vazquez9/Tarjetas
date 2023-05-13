import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EncabezadoPrincipalComponent } from './encabezado-principal/encabezado-principal.component';
import { LoadingComponent } from './loading/loading.component';
import { EncabezadoSecundarioComponent } from './encabezado-secundario/encabezado-secundario.component';
import { PrimeModule } from '../prime/prime.module';

import { MenubarModule } from 'primeng/menubar';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    EncabezadoPrincipalComponent,
    LoadingComponent,
    EncabezadoSecundarioComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    MenubarModule
  ],
  exports:[
    EncabezadoPrincipalComponent,
    LoadingComponent,
    EncabezadoSecundarioComponent,
    FooterComponent
  ]
})
export class SharedModule { }
