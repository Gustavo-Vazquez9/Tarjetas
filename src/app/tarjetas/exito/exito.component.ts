import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-exito',
  templateUrl: './exito.component.html',
  styleUrls: ['./exito.component.css']
})
export class ExitoComponent {
  constructor(private loadingService : LoadingService, private router : Router) {}

  public loading = false;

  finalizar()
  {
    this.loading = true;
    setTimeout(() => {
      this.loadingService.setLoading().subscribe( () =>
      {
        this.loading=false;
        this.router.navigate(['/tarjetas/misTarjetas']);
      }
      )
    }, 1000);
  }
}
