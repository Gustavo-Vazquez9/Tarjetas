import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrincipalComponent } from "./login/principal/principal.component";

const routes: Routes = [
  {
    path:'',
    component: PrincipalComponent
  },
  {
    path:'auth',
    loadChildren: () => import('./login/login.module').then( module => module.LoginModule)
  },
  {
    path:'tarjetas',
    loadChildren: () => import('./tarjetas/tarjetas.module').then( module => module.TarjetasModule)
  }
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {}
