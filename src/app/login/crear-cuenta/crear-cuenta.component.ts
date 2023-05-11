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
      correo: ['', [Validators.required, Validators.email]],
      contra1: ['', [Validators.required]],
      contra2: ['', [Validators.required]]
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

  this.loginService.postUsuario("http://localhost:3000/usuarios", this.post)
      .subscribe( (data) =>
      {
        if(this.createForm.value.contra1 === this.createForm.value.contra2)
        {
          this.loading=false;
          this.router.navigate(['/login']);
          console.log(data);
        }else{
          this.loading=false;
        }
      }
      );
}
onSubmit()
{

}
}
