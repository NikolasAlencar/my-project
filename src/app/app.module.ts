import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TelaInicioComponent } from './tela-inicio/tela-inicio.component';
import { ConsultaClientesComponent } from './tela-inicio/consulta-clientes/consulta-clientes.component';
import { ResumoCadastralComponent } from './tela-inicio/resumo-cadastral/resumo-cadastral.component';
import { ContaDigitalComponent } from './tela-inicio/options-tela-inicio/options-dado-pessoal/conta-digital/conta-digital.component';
import { DadosPessoaisComponent } from './tela-inicio/options-tela-inicio/options-dado-pessoal/dados-pessoais/dados-pessoais.component';
import { OptionsDadoPessoalComponent } from './tela-inicio/options-tela-inicio/options-dado-pessoal/options-dado-pessoal.component';
import { HeaderComponent } from './header/header.component';
import { OptionsTelaInicioComponent } from './tela-inicio/options-tela-inicio/options-tela-inicio.component';
import { HistoricoComponent } from './tela-inicio/options-tela-inicio/options-dado-pessoal/historico/historico.component';
import { ResetSenhaComponent } from './tela-inicio/options-tela-inicio/options-dado-pessoal/reset-senha/reset-senha.component';
import { EnviarParaComponent } from './tela-inicio/options-tela-inicio/options-dado-pessoal/enviar-para/enviar-para.component';
import { TelaConsultaComponent } from './tela-consulta/tela-consulta.component';
import { HeaderAbertoComponent } from './header/header-aberto/header-aberto.component';
import { TelaLoginComponent } from './tela-login/tela-login.component';

@NgModule({
  declarations: [
    AppComponent,
    TelaInicioComponent,
    ConsultaClientesComponent,
    ResumoCadastralComponent,
    ContaDigitalComponent,
    DadosPessoaisComponent,
    OptionsDadoPessoalComponent,
    HeaderComponent,
    OptionsTelaInicioComponent,
    HistoricoComponent,
    ResetSenhaComponent,
    EnviarParaComponent,
    TelaConsultaComponent,
    HeaderAbertoComponent,
    TelaLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
