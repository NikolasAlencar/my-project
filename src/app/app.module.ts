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
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerLoadComponent } from './components/spinner-load/spinner-load.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { BottomSheetComponent } from './components/bottom-sheet/bottom-sheet.component';
import { OptionsCrivoComponent } from './tela-inicio/options-tela-inicio/options-crivo/options-crivo.component';

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
    TelaLoginComponent,
    SpinnerLoadComponent,
    BottomSheetComponent,
    OptionsCrivoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatBottomSheetModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
