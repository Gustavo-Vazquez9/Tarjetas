import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrincipalComponent } from './principal/principal.component';
import { SharedModule } from '../shared/shared.module';
import { PrimeModule } from '../prime/prime.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//components
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { PasswordModule } from 'primeng/password';
import { LoginRoutingModule } from './login-routing.module';
import { InicioSesionComponent } from './inicio-sesion/inicio-sesion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PrincipalComponent,
    InicioSesionComponent,
    CrearCuentaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    LoginRoutingModule,
    PrimeModule,
    ButtonModule,
    CardModule,
    PasswordModule
  ]
})
export class LoginModule { }
