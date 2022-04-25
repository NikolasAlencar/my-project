import { Component, OnInit } from '@angular/core';
import { SubscriberService } from 'src/app/services/subscriber.service';

@Component({
  selector: 'app-header-aberto',
  templateUrl: './header-aberto.component.html',
  styleUrls: ['./header-aberto.component.css']
})
export class HeaderAbertoComponent implements OnInit {

  constructor(private subscriberService: SubscriberService) { 
    this.subscriberService.aberto$.subscribe(abrir => {
      this.opcoesHeaderAbertas = abrir
    });
  }

  fecharOpcoes(): void{
    this.subscriberService.abrirHeader(this.opcoesHeaderAbertas)
  }

  opcoesHeaderAbertas: boolean = false;

  ngOnInit(): void {
  }

}
