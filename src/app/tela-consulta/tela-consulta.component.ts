import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';

@Component({
  selector: 'app-tela-consulta',
  templateUrl: './tela-consulta.component.html',
  styleUrls: ['./tela-consulta.component.css']
})
export class TelaConsultaComponent implements OnInit {
  
  constructor(private telaInicioService: TelaInicioService) { 
    this.telaInicioService.hasHeader$.subscribe(hasHeader => {
      const boo = new Boolean(hasHeader)
      this.hasHeader = boo.valueOf()
    });
  }

  public opcaoSelecionada = 'UserId';
  public valorDigitado: any;
  public spinnerLoad: boolean = false;
  public hasHeader: boolean = false;

  click(opcaoSelecionada: any){
    this.opcaoSelecionada = this.telaInicioService.opcaoSelecionada(opcaoSelecionada)
  }

  pesquisar = () => {
    this.spinnerLoad = true;
    try{
      this.telaInicioService.consultar(this.opcaoSelecionada, this.valorDigitado)
    }catch(erro){
      console.log('Erro: ' + erro)
    }finally{
      this.spinnerLoad = false;
    }  
  }

  ngOnInit(): void {
    if(this.telaInicioService.autenticado === false){
      alert('Você não está logado!')
      this.telaInicioService.navegarParaLogin()     
    }
    this.telaInicioService.verificaHasHeader(this.hasHeader = true)
  }

  abrirSpinner(){
    //return
    this.spinnerLoad = true;
  }
}
