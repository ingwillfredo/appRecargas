import { Component } from '@angular/core';

@Component({
  selector: 'app-info-recarga',
  templateUrl: './info-recarga.component.html',
  styleUrls: ['./info-recarga.component.css']
})
export class InfoRecargaComponent {
  vendedor: string;
  recarga: number;

  constructor(){
    this.vendedor = 'Nombre Vendedor';
    this.recarga = 15000;
  }

}
