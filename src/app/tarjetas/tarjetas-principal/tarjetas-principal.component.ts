import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-tarjetas-principal',
  templateUrl: './tarjetas-principal.component.html',
  styleUrls: ['./tarjetas-principal.component.css']
})
export class TarjetasPrincipalComponent {

  constructor(private loadingService : LoadingService, private router : Router) {}

  public loading = false;

  navegaASolicitarTarjeta()
  {
    this.loading = true;
    setTimeout(() => {
      this.loadingService.setLoading().subscribe( () =>
      {
        this.loading=false;
        this.router.navigate(['/tarjetas/solicitarTarjeta']);
      }
      )
    }, 1000);
  }

}
