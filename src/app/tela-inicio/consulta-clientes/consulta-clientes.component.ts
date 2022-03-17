import { Component, OnInit } from '@angular/core';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';

@Component({
  selector: 'app-consulta-clientes',
  templateUrl: './consulta-clientes.component.html',
  styleUrls: ['./consulta-clientes.component.css']
})
export class ConsultaClientesComponent implements OnInit {

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
  
  }
}
