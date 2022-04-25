import { Component, OnInit} from '@angular/core';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';
import { SubscriberService } from '../services/subscriber.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})
export class HeaderComponent implements OnInit {

  constructor(private telaInicioService: TelaInicioService,
              private subscriberService: SubscriberService) { }

  iconeSair: string = "..//src/assets/img/delete-sign.png";
  iconeLista: string = "..//src/assets/img/list--v1.png";

  opcoesHeaderAbertas: boolean = false;

  abrirOpcoes(): void{
    if (this.opcoesHeaderAbertas === false){
      this.opcoesHeaderAbertas = true
    } else{
      this.opcoesHeaderAbertas = false
    }
    this.subscriberService.abrirHeader(this.opcoesHeaderAbertas)
  }

  voltar = () => {
    this.telaInicioService.voltar()
  }

  ngOnInit(): void {
  }
}
