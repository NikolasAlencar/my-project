import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.css']
})
export class TelaInicioComponent implements OnInit {

  constructor(private telaInicioService: TelaInicioService, private route: ActivatedRoute) { 
    this.telaInicioService.aberto$.subscribe(abrir => {
      const boo = new Boolean(abrir)
      this.opcoesHeaderAbertas = boo.valueOf()
    });
  }

  urlAtual = this.route.snapshot.url.join('');
  opcoesHeaderAbertas: boolean = false;

  ngOnInit(): void {
    if(this.telaInicioService.autenticado === false){
      alert('Você não está logado!')
      this.telaInicioService.navegarParaLogin()     
    }
    this.telaInicioService.adicionaHistoria(this.urlAtual)
  }
}
