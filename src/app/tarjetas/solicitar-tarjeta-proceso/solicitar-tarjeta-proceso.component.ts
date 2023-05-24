import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';
import { map } from 'rxjs';

@Component({
  selector: 'app-solicitar-tarjeta-proceso',
  templateUrl: './solicitar-tarjeta-proceso.component.html',
  styleUrls: ['./solicitar-tarjeta-proceso.component.css']
})
export class SolicitarTarjetaProcesoComponent implements OnInit{

  public datoslocal : any = {};
  public maxDebito = true;
  public maxCredito = true;
  public loading = false;
  public tarjetas : string[] = ["Tarjeta de Credito","Tarjeta de Debito"];


  constructor(private loadingService : LoadingService, private router : Router) {}


  ngOnInit(): void {
    let contadorDebito = 0;
    let contadorCredito = 0;
    this.datoslocal = this.loadingService.getDatos();
    this.loadingService.getTarjetas(`http://localhost:3000/usuarios/${this.datoslocal.id}/tarjetas`)
    .subscribe( (data) =>
    {
      data.map( (item : any) =>
      {
        if(item.tipo === "Tarjeta de Debito")
        {
          contadorDebito++;
          if(contadorDebito === 3)
          {
            this.maxDebito = false;
            this.loadingService.setTarjetaValida("Tarjeta de Credito");
          }
        } else if(item.tipo === "Tarjeta de Credito") {
          contadorCredito++;
          if(contadorCredito === 3)
          {
            this.maxCredito = false;
            this.loadingService.setTarjetaValida("Tarjeta de Debito");
          }
        }
      });
    });
  }


  tipoTarjeta(tipo : number)
  {
    this.loading = true;
    setTimeout(() => {
      this.loadingService.setLoading().subscribe( () =>
      {
        this.loading=false;
        this.loadingService.setDatosTarjeta({"datoTarjeta":this.tarjetas[tipo]});
        this.router.navigate(['/tarjetas/tipoTarjeta']);
      }
      )
    }, 1000);
  }

}
