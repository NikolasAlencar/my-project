import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TelaConsultaComponent } from './tela-consulta/tela-consulta.component';
import { OptionsCrivoComponent } from './tela-inicio/options-tela-inicio/options-crivo/options-crivo.component';
import { OptionsDadoPessoalComponent } from './tela-inicio/options-tela-inicio/options-dado-pessoal/options-dado-pessoal.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

const routes: Routes = [
  { path: '', component: TelaLoginComponent },
  { path: 'consulta', component: TelaConsultaComponent },
  { 
    path: 'home', component: TelaInicioComponent,
    children: [
      { path: '', component: OptionsDadoPessoalComponent },
      { path: 'crivo', component: OptionsCrivoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
