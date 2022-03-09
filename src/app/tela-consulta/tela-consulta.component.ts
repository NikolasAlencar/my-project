import { Component, OnInit } from '@angular/core';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';

@Component({
  selector: 'app-tela-consulta',
  templateUrl: './tela-consulta.component.html',
  styleUrls: ['./tela-consulta.component.css']
})
export class TelaConsultaComponent implements OnInit {
  
  constructor(private telaInicioService: TelaInicioService) { }

  opcaoSelecionada = 'UserId';
  valorDigitado: any;
  public spinnerLoad: boolean = false;

  click(opcaoSelecionada: any){
    this.opcaoSelecionada = this.telaInicioService.opcaoSelecionada(opcaoSelecionada)
  }

  pesquisar = () => {
    this.spinnerLoad = true;
    try{
      this.telaInicioService.cpf = this.valorDigitado;
      this.telaInicioService.consultarPorCpf(this.valorDigitado)
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
  }
}
