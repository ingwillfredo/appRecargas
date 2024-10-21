import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resumen } from './models/resumen.model';

@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  constructor(private http: HttpClient) { }

  urlGetInfo = 'https://localhost:7149/api/Ventatotal/GetVentaTotal/';

  public getInfo(): Observable<Resumen[]> {
    return this.http.get<Resumen[]>(this.urlGetInfo)
  }

  urlGetOperadores = 'https://localhost:7149/api/Ventatotal/GetOperadores';

  public GetOperadores(): Observable<any> {
    return this.http.get<any>(this.urlGetOperadores)
  }

  urlGetVendedores = 'https://localhost:7149/api/Ventatotal/GetVendedores';

  public GetVendedores(): Observable<any> {
    return this.http.get<any>(this.urlGetVendedores)
  }

  private urlGuardaRecarga = 'https://localhost:7149/api/Ventatotal/AgregaRecarga';

  public AddRecarga(recarga: any): Observable<any> {
    console.log(recarga);
    let result =  this.http.post<any>(this.urlGuardaRecarga, recarga);
    return result;
  }
}
