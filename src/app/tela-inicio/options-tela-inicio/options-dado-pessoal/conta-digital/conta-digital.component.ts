import { Component, OnInit } from '@angular/core';
import { ConsultarService } from 'src/app/services/consultar.service';
import { SubscriberService } from 'src/app/services/subscriber.service';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';

@Component({
  selector: 'app-conta-digital',
  templateUrl: './conta-digital.component.html',
  styleUrls: ['./conta-digital.component.css']
})
export class ContaDigitalComponent implements OnInit {

  constructor(public telaInicioService: TelaInicioService, 
              private consultarService: ConsultarService,
              private subscriberService: SubscriberService) { 
    this.subscriberService.updateDataHome.subscribe(data => {
      this.clienteConsultado = data
    })
  }

  clienteConsultado: any;

  ngOnInit(): void { 
    this.clienteConsultado = this.consultarService.clienteConsultado[0]
  }

}
