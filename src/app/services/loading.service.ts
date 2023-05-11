import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

   loading = new BehaviorSubject<boolean>(false);

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
}
