import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-tipo-tarjeta',
  templateUrl: './tipo-tarjeta.component.html',
  styleUrls: ['./tipo-tarjeta.component.css']
})
export class TipoTarjetaComponent {


  constructor(private loadingService : LoadingService, private router : Router) {}

  public loading = false;
  public tarjetas : string[] = ["GFT Premium","GFT Gold","GFT Black"];
  public colores : string[] = ["rgb(25,17,164)","rgb(164,146,17)","rgb(0,0,0)"];
  public informacion : string[] = ["Las compras que realices te bonificaran el 2% en puntos, que podras canjear en tus compras.","Las compras que realices te bonificaran el 5% en puntos, que podras canjear en tus compras.","Las compras que realices te bonificaran el 10% en puntos, que podras canjear en tus compras."];

  tipoTarjeta( tipo : number)
  {
    this.loading = true;
    setTimeout(() => {
      this.loadingService.setLoading().subscribe( () =>
      {
        this.loading=false;
        this.loadingService.tipoColorResumen(this.colores[tipo]);
        this.loadingService.tipoEspecificacionResumen(this.tarjetas[tipo]);
        this.loadingService.tipoInformacionResumen(this.informacion[tipo]);
        this.router.navigate(['/tarjetas/resumenTarjeta']);
      }
      )
    }, 1000);
  }

}
