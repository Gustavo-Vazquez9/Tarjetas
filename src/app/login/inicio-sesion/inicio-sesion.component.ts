import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent implements OnInit{
  loading = false;
  public validaEntrada = false;
  public validarDatos = false;
  public loginForm!: FormGroup;
  public correo : string = ''
  public contrasena : string = ''
  public credencialesValidas : any =
  {
    correo:'gusgoludo9@gmail.com',
    contra:'CruzAzul.9'
  }

  constructor(private router:Router, private formBuilder: FormBuilder,private loadingService: LoadingService){}


  ngOnInit()
  {
    this.loginForm = this.formBuilder.group(
      {
        email: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
        password: ['', [Validators.required, Validators.minLength(6)]]
      }
    );
  }

  validarCredenciales()
  {

    this.loadingService.getUusario("http://192.168.0.3:3000/usuarios")
    .subscribe( (data) =>
    {
      this.loading = true;
      this.validaEntrada=true;
      data.map( (item : any) =>
      {
        if(this.correo === item.correo && this.contrasena === item.contra)
        {
            this.loading=false;
            const informacion = {"id":item.id,"nombre":item.nombre + " " +item.apellido}
           this.loadingService.setDatos(informacion);
            this.router.navigate(['/tarjetas/misTarjetas']);
            return;
        } else
        {
          this.loading=false;
          this.validaEntrada=false;
          setTimeout(() => {
            this.validarDatos= false;
          }, 4000);
          this.validarDatos= true;
        }
      });
    }
    );
  }

  onSubmit()
  {
  }
}

