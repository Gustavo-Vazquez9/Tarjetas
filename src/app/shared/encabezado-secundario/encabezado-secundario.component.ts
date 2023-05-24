import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-encabezado-secundario',
  templateUrl: './encabezado-secundario.component.html',
  styleUrls: ['./encabezado-secundario.component.css']
})
export class EncabezadoSecundarioComponent {

  loading = false;
  items: MenuItem[] = [];

  constructor(private router:Router,private loadingService: LoadingService){}

    ngOnInit() {
        this.items = [
            {
                label: 'Mis Tarjetas',
                icon: '',
                command: () => this.redirectToMisTarjetas()
            },
            {
                label: 'Solicitar tarjetas',
                icon: '',
                command: () => this.redirectToSolicitarTarjeta()
            },
            {
                label: 'Cerrar Sesion',
                icon: '',
                command: () => this.redirectToCerrarSesion()
            }
        ];
    }
  redirectToMisTarjetas(): void {
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
  redirectToSolicitarTarjeta(): void {
    this.loading = true;
    setTimeout(() => {
      this.loadingService.setLoading().subscribe( () =>
      {
        this.loading=false;
        if(this.loadingService.getCantidadTarjetas())
        {
          this.router.navigate(['/tarjetas/seleccionTarjeta']);
        }
        else{
          this.router.navigate(['/tarjetas/misTarjetas']);
        }
      }
      )
    }, 1000);
  }
  redirectToCerrarSesion(): void {
    this.loading = true;
    setTimeout(() => {
      this.loadingService.setLoading().subscribe( () =>
      {
        this.loading=false;
        this.router.navigate(['']);
      }
      )
    }, 1000);
  }

}
