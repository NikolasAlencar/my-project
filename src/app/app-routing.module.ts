import { NgModule } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { RouterModule, Routes } from '@angular/router';
import { TelaConsultaComponent } from './tela-consulta/tela-consulta.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const routes: Routes = [
  { path: '', component: TelaLoginComponent },
  { path: 'consulta', component: TelaConsultaComponent },
  { path: 'home', component: TelaInicioComponent },
  { path: 'teste', component: MatBottomSheet }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
