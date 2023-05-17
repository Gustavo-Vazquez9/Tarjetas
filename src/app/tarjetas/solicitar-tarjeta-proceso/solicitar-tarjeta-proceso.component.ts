import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-solicitar-tarjeta-proceso',
  templateUrl: './solicitar-tarjeta-proceso.component.html',
  styleUrls: ['./solicitar-tarjeta-proceso.component.css']
})
export class SolicitarTarjetaProcesoComponent {

  constructor(private loadingService : LoadingService, private router : Router) {}

  public loading = false;
  public tarjetas : string[] = ["Tarjeta de Credito","Tarjeta de Debito"];

  tipoTarjeta(tipo : number)
  {
    this.loading = true;
    setTimeout(() => {
      this.loadingService.setLoading().subscribe( () =>
      {
        this.loading=false;
        this.loadingService.tipoTarjetaResumen(this.tarjetas[tipo]);
        this.router.navigate(['/tarjetas/tipoTarjeta']);
      }
      )
    }, 1000);
  }

}
