import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-tarjetas-principal',
  templateUrl: './tarjetas-principal.component.html',
  styleUrls: ['./tarjetas-principal.component.css']
})
export class TarjetasPrincipalComponent implements OnInit{

  public banderaMuestra = false;
  public coloresTarjeta : string[] =
  [
    "linear-gradient(90deg, rgba(25,17,164,1) 23%, rgba(13,13,194,1) 62%, rgba(1,1,251,1) 99%)",
    "linear-gradient(90deg, rgba(164,146,17,1) 23%, rgba(195,173,11,1) 62%, rgba(232,205,5,1) 99%)",
    "linear-gradient(90deg, rgba(0,0,0,1) 23%, rgba(40,40,40,1) 62%, rgba(73,73,73,1) 99%)"
  ];
  public datos : any[] = [];
  public datoslocal : any = {};
  public banderaCantidadTarjetas = true;

  constructor(private loadingService : LoadingService, private router : Router) {}

  ngOnInit(): void {
    this.datoslocal = this.loadingService.getDatos();
    this.loadingService.getTarjetas(`http://localhost:3000/usuarios/${this.datoslocal.id}/tarjetas`)
    .subscribe( (data) =>
    {
      this.loading = false;
      if(data.length != 0)
      {

        if(data.length === 6)
        {
          this.banderaCantidadTarjetas= false;
          this.loadingService.setCantidadTarjetas(false);
        } else{
          this.loadingService.setCantidadTarjetas(true);
        }

        this.datos = data;
        this.banderaMuestra=true;
      }
      else {
        this.banderaMuestra=false;
      }
    }
    );
  }
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
