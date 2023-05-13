import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-encabezado-secundario',
  templateUrl: './encabezado-secundario.component.html',
  styleUrls: ['./encabezado-secundario.component.css']
})
export class EncabezadoSecundarioComponent {

  items: MenuItem[] = [];

    ngOnInit() {
        this.items = [
            {
                label: 'Mis Tarjetas',
                icon: ''
            },
            {
                label: 'Solicitar tarjetas',
                icon: ''
            },
            {
                label: 'Cerrar Sesion',
                icon: ''
            }
        ];
    }

}
