import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ServicioService } from '../servicio.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-venta-recarga',
  templateUrl: './venta-recarga.component.html',
  styleUrls: ['./venta-recarga.component.css'],
})
export class VentaRecargaComponent implements OnInit {

  constructor(private apiService: ServicioService, private router: Router) {}

  ngOnInit(): void {
    this.obtieneOperadores();
    this.obtieneVendedores();
  }

  formRecarga = new FormGroup({
    id_Vendedor: new FormControl(),
    id_Operador: new FormControl(),
    numero_Celular: new FormControl(),
    valor: new FormControl(),
  });

  submit() {
    let obj = this.formRecarga.value;
    this.agregarecarga(obj);
    console.log(this.mensaje);
    this.resetForm();
    this.router.navigate(['']);
  }

  resetForm() {
    this.formRecarga.reset();
  }

  mensaje: string;

  agregarecarga(obj: any){
    this.apiService.AddRecarga(obj).subscribe(result => this.mensaje = result);
  }

  listOperadores: any[] = [];

  obtieneOperadores() {
    this.apiService.GetOperadores().subscribe((operadores) => {
      this.listOperadores = operadores;
    });
  }

  listVendedores: any[] = [];

  obtieneVendedores() {
    this.apiService.GetVendedores().subscribe((vendedores) => {
      this.listVendedores = vendedores;
    });
  }
}
