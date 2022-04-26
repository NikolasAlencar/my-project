import { Component, OnInit } from '@angular/core';
import { SubscriberService } from 'src/app/services/subscriber.service';

@Component({
  selector: 'app-header-aberto',
  templateUrl: './header-aberto.component.html',
  styleUrls: ['./header-aberto.component.css']
})
export class HeaderAbertoComponent implements OnInit {

  constructor(private subscriberService: SubscriberService) { }

  fecharOpcoes(): void{
    this.subscriberService.abrirHeader(false)
  }

  ngOnInit(): void {
  }

}
