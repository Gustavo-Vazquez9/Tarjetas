import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { LoginModule } from './login/login.module';
import { PrimeModule } from './prime/prime.module';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    SharedModule,
    LoginModule,
    PrimeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
