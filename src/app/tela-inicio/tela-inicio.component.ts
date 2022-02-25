import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.css']
})
export class TelaInicioComponent implements OnInit {

  constructor() { }

  opcoesHeaderAbertas: boolean = false;

  onMudouValor(evento: any){
    this.opcoesHeaderAbertas = evento;
  }

  ngOnInit(): void {

  }
}
