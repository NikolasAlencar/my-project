import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaConsultaComponent } from './tela-consulta/tela-consulta.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const routes: Routes = [
  { path: 'login', component: TelaLoginComponent },
  { path: 'consulta', component: TelaConsultaComponent },
  { path: 'home', component: TelaInicioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
