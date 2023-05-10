import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit{
  public validaEntrada = false;
  public loginForm!: FormGroup;
  public correo : string = ''
  public contrasena : string = ''
  public credencialesValidas : any =
  {
    correo:'gusgoludo9@gmail.com',
    contra:'CruzAzul.9'
  }

  constructor(private router:Router, private formBuilder: FormBuilder){}


  ngOnInit()
  {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.email]],
        password: ['', [Validators.required, Validators.minLength(0)]]
      }
    );
  }

  validarCredenciales()
  {

    if(this.correo === this.credencialesValidas.correo && this.contrasena === this.credencialesValidas.contra)
    {
      this.router.navigate(['/crearCuenta']);
      this.validaEntrada=true;
    } else 
    {
      this.validaEntrada=false;
    }
  }

  onSubmit()
  {
    console.log(this.loginForm.valid);
  }
}
