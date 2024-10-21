import { Component, OnInit } from '@angular/core';
import { ServicioService } from '../servicio.service';
import { Resumen } from '../models/resumen.model';

@Component({
  selector: 'app-resumen-ventas',
  templateUrl: './resumen-ventas.component.html',
  styleUrls: ['./resumen-ventas.component.css']
})
export class ResumenVentasComponent implements OnInit {
  cantidadT: number;
  cantidadM: number;
  cantidadC: number;
  cantidadU: number;
  valorT: number;
  valorM: number;
  valorC: number;
  valorU: number;

  constructor(private apiService: ServicioService){

  }

  ngOnInit(): void {
    this.getInfo();
  }

  getInfo(){
    this.getResumen();
  }

  ListObj: Resumen [] = [];

  getResumen(){
    this.apiService.getInfo().subscribe(resumen => {
      this.ListObj = resumen;
    })
  }


}
