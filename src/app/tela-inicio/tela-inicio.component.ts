import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';
import { LoginService } from '../services/login.service';
import { SubscriberService } from '../services/subscriber.service';

@Component({
  selector: 'app-tela-inicio',
  templateUrl: './tela-inicio.component.html',
  styleUrls: ['./tela-inicio.component.css']
})
export class TelaInicioComponent implements OnInit {

  constructor(private telaInicioService: TelaInicioService,
              private loginService: LoginService,
              private subscriberService: SubscriberService, 
              private route: ActivatedRoute,) { 

    this.subscriberService.opcoesAbertas.subscribe(abrir => {
      this.opcoesHeaderAbertas = abrir
    });
  }

  private urlAtual = this.route.snapshot.url.join('');
  public opcoesHeaderAbertas: boolean = false;

  ngOnInit(): void {
    this.loginService.isLogged()
    this.telaInicioService.adicionaHistoria(this.urlAtual)
  }
}
