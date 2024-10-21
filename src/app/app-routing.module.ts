import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { InfoRecargaComponent } from './info-recarga/info-recarga.component';

const routes: Routes = [
  {path: '', component: AppComponent},
  {path: 'info', component: InfoRecargaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
