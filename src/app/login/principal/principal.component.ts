import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingService } from 'src/app/services/loading.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent {

  constructor(private router: Router, private loadingService: LoadingService){}

  loading = false;

  navegaALogin()
  {
    this.loading = true;
    this.loadingService.setLoading().subscribe( () =>
    {
      this.loading=false;
      this.router.navigate(['/login']);
    }
    )
  }
  navegaACrearCuenta()
  {

    var j = 1;
    for(var i = -13 ; i <= -10 ; i++)
    {
      j++;
    }
    console.log(j);
    this.loading = true;
    this.loadingService.setLoading().subscribe( () =>
    {
      this.loading=false;
      this.router.navigate(['/crearCuenta']);
    }
    )
  }

}
