import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.css']
})
export class TelaInicioComponent implements OnInit {

  constructor(private telaInicioService: TelaInicioService, 
              private route: ActivatedRoute,
              private alertService: AlertService) { 

    this.telaInicioService.aberto$.subscribe(abrir => {
      this.opcoesHeaderAbertas = abrir
    });
  }

  urlAtual = this.route.snapshot.url.join('');
  opcoesHeaderAbertas: boolean = false;

  ngOnInit(): void {
    if(this.telaInicioService.autenticado === false){
      this.alertService.showAlertWarning('Você não está logado!')
      this.telaInicioService.navegarParaLogin()     
    }
    this.telaInicioService.adicionaHistoria(this.urlAtual)
  }
}
