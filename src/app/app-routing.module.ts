import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PrincipalComponent } from "./login/principal/principal.component";

const routes: Routes = [
  {
    path:'auth',
    loadChildren: () => import('./login/login.module').then( module => module.LoginModule)
  }
];
@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]
})

export class AppRoutingModule {}
