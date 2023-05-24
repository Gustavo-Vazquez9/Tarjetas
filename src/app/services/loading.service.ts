import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

   loading = new BehaviorSubject<boolean>(false);
   //local
   public datoslocal : any;
   public datosTarjetalocal : any;
   public tipoTarjetalocal : any;
   public seguimiento! : boolean;
   public indicador = "";

  constructor(private http: HttpClient) { }

  setLoading()
  {
    this.loading.next(true);
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1').pipe(
      tap( () =>
      {
        this.loading.next(false);
      })
    )
  }

  public postUsuario(url: string, httpHeaders: {}): Observable<any> {
    return this.http.post<any>(url, httpHeaders)
      .pipe(
        map(data => {
          this.loading.next(false);
          return data;
        })
      )
  }


  public getUusario(url: string): Observable<any> {
    return this.http.get<any>(url)
      .pipe(
        map(data => {
          this.loading.next(false);
          return data;
        })
      )
  }

  public postTarjetas(url: string, httpHeaders: {}): Observable<any> {
    return this.http.post<any>(url, httpHeaders)
      .pipe(
        map(data => {
          this.loading.next(false);
          return data;
        })
      )
  }

  public getTarjetas(url: string): Observable<any> {
    return this.http.get<any>(url)
      .pipe(
        map(data => {
          this.loading.next(false);
          return data;
        })
      )
  }


  //Informacion del usuario login
  setDatos(valor? : string|object)
  {
    this.datoslocal = valor;
    localStorage.setItem('data', JSON.stringify(valor));
  }

  getDatos()
  {
    if(!this.datoslocal)
    {
      this.datoslocal = JSON.parse(localStorage.getItem('data') || '{}');
    }
    return this.datoslocal;
  }


  //informacion de la tarjeta solictarTarjetaProceso
  setDatosTarjeta(valor? : string|object)
  {
    this.datosTarjetalocal = valor;
    localStorage.setItem('datosTarjeta', JSON.stringify(valor));
  }

  getDatosTarjeta()
  {
    if(!this.datosTarjetalocal)
    {
      this.datosTarjetalocal = JSON.parse(localStorage.getItem('datosTarjeta') || '{}');
    }
    return this.datosTarjetalocal;
  }


  //informacion del tipo de tarjeta tipoTarjeta
  setTipoTarjeta(valor? : string|object)
  {
    this.tipoTarjetalocal = valor;
    localStorage.setItem('tipo', JSON.stringify(valor));
  }

  getTipoTarjeta()
  {
    if(!this.tipoTarjetalocal)
    {
      this.tipoTarjetalocal = JSON.parse(localStorage.getItem('tipo') || '{}');
    }
    return this.tipoTarjetalocal;
  }


    //informacion del seguimiento por cantidad de tarjetas
    setCantidadTarjetas(valor : boolean)
    {
      this.seguimiento = valor;
      localStorage.setItem('cantidad', JSON.stringify(valor));
    }

    getCantidadTarjetas()
    {
      if(!this.seguimiento)
      {
        this.seguimiento = JSON.parse(localStorage.getItem('cantidad') || '{}');
      }
      return this.seguimiento;
    }


    //Indica el tipo de tarjetas validas
    setTarjetaValida(valor : string)
      {
        this.indicador = valor;
        localStorage.setItem('identificador', JSON.stringify(valor));
      }

    getTarjetaValida()
      {
        if(!this.indicador)
        {
          this.indicador = JSON.parse(localStorage.getItem('identificador') || '{}');
        }
        return this.indicador;
      }
}
