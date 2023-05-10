import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
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
}
