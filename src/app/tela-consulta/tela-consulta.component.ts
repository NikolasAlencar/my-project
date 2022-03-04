import { Component, OnInit } from '@angular/core';
import { TelaInicioService } from '../tela-inicio.service';

@Component({
  selector: 'app-tela-consulta',
  templateUrl: './tela-consulta.component.html',
  styleUrls: ['./tela-consulta.component.css']
})
export class TelaConsultaComponent implements OnInit {

  constructor(private telaInicioService: TelaInicioService) { }

  opcaoSelecionada = 'UserId';
  valorDigitado: any;

  click(opcaoSelecionada: any){
    this.opcaoSelecionada = this.telaInicioService.opcaoSelecionada(opcaoSelecionada)
  }

  pesquisar = () => {
    this.telaInicioService.consultarPorCpf(this.valorDigitado)
  }

  ngOnInit(): void {
  }

}
