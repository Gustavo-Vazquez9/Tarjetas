import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TarjetasRoutingModule } from './tarjetas-routing.module';
import { TarjetasPrincipalComponent } from './tarjetas-principal/tarjetas-principal.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeModule } from '../prime/prime.module';

import { ButtonModule } from 'primeng/button';
import { SolicitarTarjetaComponent } from './solicitar-tarjeta/solicitar-tarjeta.component';
import { SolicitarTarjetaProcesoComponent } from './solicitar-tarjeta-proceso/solicitar-tarjeta-proceso.component';

@NgModule({
  declarations: [
    TarjetasPrincipalComponent,
    SolicitarTarjetaComponent,
    SolicitarTarjetaProcesoComponent
  ],
  imports: [
    CommonModule,
    PrimeModule,
    TarjetasRoutingModule,
    SharedModule,
    ButtonModule
  ]
})
export class TarjetasModule { }
