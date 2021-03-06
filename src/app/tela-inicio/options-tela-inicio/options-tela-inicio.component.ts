import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { NavigateService } from 'src/app/services/navigate.service';

@Component({
  selector: 'app-options-tela-inicio',
  templateUrl: './options-tela-inicio.component.html',
  styleUrls: ['./options-tela-inicio.component.css']
})
export class OptionsTelaInicioComponent implements OnInit {

  constructor(private navigateService: NavigateService, 
              private loginService: LoginService, 
              private outlet: RouterOutlet) { }

  public opcoes: Array<any> = [{nome: 'Dados pessoais', id: 1, path: ''},
                        {nome: 'Crivo', id: 2, path: 'crivo'}, 
                        {nome: 'PLD', id: 3, path: ''},
                        {nome: 'Identificação biométrica', id: 4, path: ''},
                        {nome: 'Notificações', id: 6, path: ''},
                        {nome: 'Bloquear/Desbloquear dispositivo'}, 
                        {nome: 'Portabilidade', id: 7, path: ''},
                        {nome: 'Comprovantes', id: 8, path: ''}, 
                        {nome: 'Token', id: 9, path: ''},
                        {nome: 'Token - Log', id: 10, path: ''}, 
                        {nome: 'Cartões', id: 11, path: ''},
                        {nome: 'Cartões BCD', id: 12, path: ''}, 
                        {nome: 'MGM', id: 13, path: ''}];

  public navegarOpcaoSelecionada = (path: string) => {
    this.navigateService.navegarOpcaoSelecionada(path)
  }

  ngOnInit(): void { this.loginService.autenticado === false ? this.outlet.deactivate() : '' }
}
