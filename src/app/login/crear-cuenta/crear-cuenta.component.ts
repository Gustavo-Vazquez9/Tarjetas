import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-crear-cuenta',
  templateUrl: './crear-cuenta.component.html',
  styleUrls: ['./crear-cuenta.component.css']
})
export class CrearCuentaComponent implements OnInit{

  public createForm!: FormGroup;
  public validaIgualdadContra = false;
  public loading = false;
  //variables para guardar
  public nombre : string = "";
  public apellido : string = "";
  public correo : string = "";
  public contra : string = "";
  public id : number = 1;

  public valor : string = "";
  public post : any = {};

constructor(private router:Router, private formBuilder: FormBuilder, private loginService : LoadingService){}

ngOnInit()
{
  this.createForm = this.formBuilder.group(
    {
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      correo: ['', [Validators.required, Validators.pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)]],
      contra1: ['', [Validators.required,Validators.minLength(6)]],
      contra2: ['', [Validators.required,Validators.minLength(6)]]
    }
  );
}


registrar()
{
  this.loading = true;
  this.post = {
    "nombre":this.nombre,
    "apellido":this.apellido,
    "correo":this.correo,
    "contra":this.contra
  }
  this.loginService.postUsuario("http://192.168.0.3:3000/usuarios", this.post)
  .subscribe( (data) =>
  {
    this.loading=false;
    this.router.navigate(['/login']);
    console.log(data);
  });
}


onSubmit()
{

}

verificar()
{
  if(this.createForm.value.contra1 === this.createForm.value.contra2)
    {
      this.validaIgualdadContra=false;
    }
    else {
      this.validaIgualdadContra=true;
    }
}
}
