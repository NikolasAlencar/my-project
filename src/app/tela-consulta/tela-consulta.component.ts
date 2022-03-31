import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';
import { AlertService } from '../services/alert.service';

@Component({
  selector: 'app-tela-consulta',
  templateUrl: './tela-consulta.component.html',
  styleUrls: ['./tela-consulta.component.css']
})
export class TelaConsultaComponent implements OnInit {
  
  constructor(private telaInicioService: TelaInicioService, 
              private route: ActivatedRoute,
              private alertService: AlertService) { 

    this.telaInicioService.hasHeader$.subscribe(hasHeader => {
      this.hasHeader = hasHeader
    });
  }

  public opcaoSelecionada: string = 'UserId';
  public valorDigitado: number | undefined;
  public spinnerLoad: boolean = false;
  public hasHeader: boolean = false;

  private urlAtual = this.route.snapshot.url.join('');

  public click(opcaoSelecionada: number){
    this.opcaoSelecionada = this.telaInicioService.opcaoSelecionada(opcaoSelecionada)
  }

  public pesquisar = () => {
    this.spinnerLoad = true;
    try{
      this.telaInicioService.consultar(this.opcaoSelecionada, this.valorDigitado)
    }catch(erro){
      console.log('Erro: ' + erro)
    }finally{
      setTimeout(() => {
        this.spinnerLoad = false;
        }, 3000);
    }  
  }

  ngOnInit(): void {
    if(this.telaInicioService.autenticado === false){
      this.alertService.showAlertWarning('Você não está logado!')
      this.telaInicioService.navegarParaLogin()     
    }
    this.telaInicioService.verificaHasHeader(this.hasHeader = true)
    this.telaInicioService.adicionaHistoria(this.urlAtual)
  }
}
