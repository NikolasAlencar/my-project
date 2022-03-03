import { Component, Input, OnInit } from '@angular/core';
import { TelaInicioService } from '../tela-inicio.service';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.css']
})
export class TelaInicioComponent implements OnInit {

  constructor(private telaInicioService: TelaInicioService) { 
    this.telaInicioService.aberto$.subscribe(abrir => {
      const boo = new Boolean(abrir)
      this.opcoesHeaderAbertas = boo.valueOf()
      console.log(this.opcoesHeaderAbertas)
    });
  }

  opcoesHeaderAbertas: boolean = false;

  ngOnInit(): void {

  }
}
