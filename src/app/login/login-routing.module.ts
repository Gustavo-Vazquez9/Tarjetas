import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrincipalComponent } from "./principal/principal.component";
import { InicioSesionComponent } from "./inicio-sesion/inicio-sesion.component";
import { CrearCuentaComponent } from "./crear-cuenta/crear-cuenta.component";

const routes: Routes = [
  {
    path:'',
    component: PrincipalComponent,
  },
  {
    path:'login',
    component: InicioSesionComponent,
  },
  {
    path:'crearCuenta',
    component: CrearCuentaComponent,
  }
];
@NgModule({
  imports:[RouterModule.forChild(routes)],
  exports:[RouterModule]
})

export class LoginRoutingModule {}
