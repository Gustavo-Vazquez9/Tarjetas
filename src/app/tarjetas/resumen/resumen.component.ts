import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit{

  public post : any = {};
  public tipo : string = "";
  public color : string = "";
  public especificacion : string = "";
  public informacion : string = "";
  public id : string = "";

  constructor(private loadingService : LoadingService, private router : Router) {}

  ngOnInit(): void {
    this.tipo = this.loadingService.tipo;
    this.color = this.loadingService.color;
    this.especificacion = this.loadingService.especificacion;
    this.informacion = this.loadingService.informacion;
    this.id = this.loadingService.id;
  }

  public loading = false;

  aceptaTarjeta()
  {
    this.loading = true;
    setTimeout(() => {
      this.loadingService.setLoading().subscribe( () =>
      {
        this.loading=false;
        this.altaTarjeta();
        this.router.navigate(['/tarjetas/exito']);
      }
      )
    }, 1000);
  }


  altaTarjeta() {
  this.loading = true;
  this.post = {
    "numero":"2451 6975 0345 7561",
    "vencimiento":"01/26",
    "tipo":this.tipo,
    "categoria":this.especificacion
  }
  this.loadingService.postTarjetas(`http://localhost:3000/usuarios/${this.id}/tarjetas`, this.post)
  .subscribe( (data) =>
  {
    this.loading=false;
    this.router.navigate(['/login']);
    console.log(data);
  });
  }


  redirectToseleccionTarjeta()
  {
    this.loading = true;
    setTimeout(() => {
      this.loadingService.setLoading().subscribe( () =>
      {
        this.loading=false;
        this.router.navigate(['/tarjetas/seleccionTarjeta']);
      }
      )
    }, 1000);
  }


  redirectTotipoTarjeta()
  {
    this.loading = true;
    setTimeout(() => {
      this.loadingService.setLoading().subscribe( () =>
      {
        this.loading=false;
        this.router.navigate(['/tarjetas/tipoTarjeta']);
      }
      )
    }, 1000);
  }

}
