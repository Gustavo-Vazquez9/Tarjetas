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
  public tipo: string = "";
  public especificacion: string = "";
  public color: string = "";
  public id: string = "";
  public informacion: string = "";
  public numeroTarjeta: string = "";

  constructor(private loadingService : LoadingService, private router : Router) {}

  ngOnInit(): void {
    this.tipo = this.loadingService.getDatosTarjeta().datoTarjeta;
    this.especificacion = this.loadingService.getTipoTarjeta().especificacion;
    this.color = this.loadingService.getTipoTarjeta().color;
    this.id = this.loadingService.getDatos().id;
    this.informacion = this.loadingService.getTipoTarjeta().informacion;
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
    }, 3000);
  }


  altaTarjeta() {
    const fechaActual = new Date();
    const mesActual = fechaActual.getMonth() + 1; // Los meses en JavaScript van de 0 a 11
    const anioActual = fechaActual.getFullYear();

    const anioVencimiento = Math.floor(Math.random() * (2030 - anioActual + 1)) + anioActual;
    let mesVencimiento: number;

    if (anioVencimiento === anioActual) {
      // Si el año de vencimiento es el mismo que el actual, generamos un mes aleatorio que no supere el mes actual
      mesVencimiento = Math.floor(Math.random() * (mesActual - 1 + 1)) + 1;
    } else {
      // Si el año de vencimiento es posterior al actual, generamos un mes aleatorio entre 1 y 12
      mesVencimiento = Math.floor(Math.random() * 12) + 1;
    }

    // Formateamos la fecha de vencimiento en el formato deseado (MM/YY)
    const fechaVencimiento = `${mesVencimiento.toString().padStart(2, '0')}/${(anioVencimiento % 100).toString().padStart(2, '0')}`;

  const randomNumber = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
  this.numeroTarjeta = this.formatoNumeroTarjeta(randomNumber.toString());

  this.loading = true;
  this.post = {
    "numero": this.numeroTarjeta,
    "vencimiento": fechaVencimiento,
    "tipo": this.tipo,
    "categoria": this.especificacion,
    "color": this.color,
    "usuarioId": this.id,
  }
  this.loadingService.postTarjetas(`http://localhost:3000/usuarios/${this.id}/tarjetas`, this.post)
  .subscribe( (data) =>
  {
    this.loading=false;
    this.router.navigate(['/tarjetas/exito']);
    console.log(data);
  });
  }


  formatoNumeroTarjeta(cardNumber: string): string {
    const parts = cardNumber.match(/[\s\S]{1,4}/g) || [];
    return parts.join(' ');
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
