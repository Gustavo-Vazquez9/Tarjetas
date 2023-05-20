import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

   loading = new BehaviorSubject<boolean>(false);

   //tarjeta
   public tipo : string = "";
   public color : string = "";
   public especificacion : string = "";
   public informacion : string = "";


   //usuario
   public nombre : string = "";
   public apellido : string = "";
   public id : string = "";

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


  public tipoTarjetaResumen(tipoP : string)
  {
    this.tipo = tipoP;
  }
  public tipoColorResumen(colorP : string)
  {
    this.color = colorP;
  }
  public tipoEspecificacionResumen(especificacionP : string)
  {
    this.especificacion = especificacionP;
  }
  public tipoInformacionResumen(informacionP : string)
  {
    this.informacion = informacionP;
  }
  public guardarDatosUsuario(id : string , nombre : string, apellido : string)
  {
    this.nombre = nombre;
    this.apellido = apellido;
    this.id = id;
  }
}
