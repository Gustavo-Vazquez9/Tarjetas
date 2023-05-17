import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-resumen',
  templateUrl: './resumen.component.html',
  styleUrls: ['./resumen.component.css']
})
export class ResumenComponent implements OnInit{

  public tipo : string = "";
  public color : string = "";
  public especificacion : string = "";
  public informacion : string = "";

  constructor(private loadingService : LoadingService, private router : Router) {}

  ngOnInit(): void {
    this.tipo = this.loadingService.tipo;
    this.color = this.loadingService.color;
    this.especificacion = this.loadingService.especificacion;
    this.informacion = this.loadingService.informacion;
  }

  public loading = false;

  aceptaTarjeta()
  {
    this.loading = true;
    setTimeout(() => {
      this.loadingService.setLoading().subscribe( () =>
      {
        this.loading=false;
        this.router.navigate(['/tarjetas/exito']);
      }
      )
    }, 1000);
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
