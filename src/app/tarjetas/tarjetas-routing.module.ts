import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TarjetasPrincipalComponent } from './tarjetas-principal/tarjetas-principal.component';
import { SolicitarTarjetaComponent } from './solicitar-tarjeta/solicitar-tarjeta.component';
import { SolicitarTarjetaProcesoComponent } from './solicitar-tarjeta-proceso/solicitar-tarjeta-proceso.component';


const routes: Routes = [
  {
    path:'',
    component: TarjetasPrincipalComponent,
  },
  {
    path:'misTarjetas',
    component: TarjetasPrincipalComponent,
  },
  {
    path:'solicitarTarjeta',
    component: SolicitarTarjetaComponent,
  },
  {
    path:'seleccionTarjeta',
    component: SolicitarTarjetaProcesoComponent,
  },
];

@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})
export class TarjetasRoutingModule { }
