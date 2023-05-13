import { NgModule } from '@angular/core';
// components
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { PasswordModule } from 'primeng/password';
import { MenubarModule } from 'primeng/menubar';
@NgModule({
  declarations: [],
  imports: [
    ButtonModule,
    ButtonModule,
    CardModule,
    PasswordModule,
    MenubarModule
  ],
  exports: [
  ]
})
export class PrimeModule { }
