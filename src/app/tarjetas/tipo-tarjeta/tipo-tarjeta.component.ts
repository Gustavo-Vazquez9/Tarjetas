import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-tipo-tarjeta',
  templateUrl: './tipo-tarjeta.component.html',
  styleUrls: ['./tipo-tarjeta.component.css']
})
export class TipoTarjetaComponent implements OnInit{
  datoslocal: any;
  public maxPremium = true;
  public maxGold = true;
  public maxBlack = true;

  constructor(private loadingService : LoadingService, private router : Router) {}


  ngOnInit(): void {
    let contadorPremium = 0;
    let contadorGold = 0;
    let contadorBlack = 0;
    this.datoslocal = this.loadingService.getDatos();
    this.loadingService.getTarjetas(`http://192.168.0.3:3000/usuarios/${this.datoslocal.id}/tarjetas`)
    .subscribe( (data) =>
    {
      data.map( (item : any) =>
      {
        if(item.tipo === this.loadingService.getDatosTarjeta().datoTarjeta)
        {
          if(item.categoria === "GFT Premium")
          {
            contadorPremium++;
            if(contadorPremium === 1)
            {
              this.maxPremium = false;
            }
          } else if(item.categoria === "GFT Gold") {
            contadorGold++;
            if(contadorGold === 1)
            {
              this.maxGold = false;
            }
          } else if(item.categoria === "GFT Black") {
            contadorBlack++;
            if(contadorBlack === 1)
            {
              this.maxBlack = false;
            }
          }
        }
      });
    });
  }

  public loading = false;
  public tarjetas : string[] = ["GFT Premium","GFT Gold","GFT Black"];
  public colores : string[] = [
    "linear-gradient(90deg, rgba(25,17,164,1) 23%, rgba(13,13,194,1) 62%, rgba(1,1,251,1) 99%)",
    "linear-gradient(90deg, rgba(164,146,17,1) 23%, rgba(195,173,11,1) 62%, rgba(232,205,5,1) 99%)",
    "linear-gradient(90deg, rgba(0,0,0,1) 23%, rgba(40,40,40,1) 62%, rgba(73,73,73,1) 99%)"
  ];
  public informacion : string[] = ["Las compras que realices te bonificaran el 2% en puntos, que podras canjear en tus compras.","Las compras que realices te bonificaran el 5% en puntos, que podras canjear en tus compras.","Las compras que realices te bonificaran el 10% en puntos, que podras canjear en tus compras."];

  tipoTarjeta( tipo : number)
  {
    this.loading = true;
    setTimeout(() => {
      this.loadingService.setLoading().subscribe( () =>
      {
        this.loading=false;
        const informacion = {"color":this.colores[tipo],"especificacion":this.tarjetas[tipo], "informacion":this.informacion[tipo]}
        this.loadingService.setTipoTarjeta(informacion);
        this.router.navigate(['/tarjetas/resumenTarjeta']);
      }
      )
    }, 1000);
  }

}
