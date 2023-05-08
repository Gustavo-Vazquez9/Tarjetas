import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  public correo : string = ''
  public contrasena : string = ''
  public credencialesValidas : any =
  {
    correo:'gusgoludo9@gmail.com',
    contra:'CruzAzul.9'
  }

  constructor(private router:Router){}

  validarCredenciales()
  {

    if(this.correo === this.credencialesValidas.correo && this.contrasena === this.credencialesValidas.contra)
    {
      this.router.navigate(['/crearCuenta']);
      console.log("entraste");
    }

  }
}
