import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VentaRecargaComponent } from './venta-recarga/venta-recarga.component';
import { ResumenVentasComponent } from './resumen-ventas/resumen-ventas.component';
import { InfoRecargaComponent } from './info-recarga/info-recarga.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    VentaRecargaComponent,
    ResumenVentasComponent,
    InfoRecargaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
