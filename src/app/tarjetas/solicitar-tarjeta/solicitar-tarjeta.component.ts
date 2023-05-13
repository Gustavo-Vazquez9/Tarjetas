import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-solicitar-tarjeta',
  templateUrl: './solicitar-tarjeta.component.html',
  styleUrls: ['./solicitar-tarjeta.component.css']
})
export class SolicitarTarjetaComponent {

  constructor(private loadingService : LoadingService, private router : Router) {}

  public loading = false;

  navegaASolicitarTarjetaProceso()
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

}
