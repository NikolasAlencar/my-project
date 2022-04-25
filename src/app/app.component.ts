import { Component } from '@angular/core';
import { SubscriberService } from './services/subscriber.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {

  constructor(private subscriberService: SubscriberService) { 
    this.subscriberService.aberto$.subscribe(abrir => {
      this.opcoesHeaderAbertas = abrir
    });
    this.subscriberService.hasHeader$.subscribe(hasHeader => {
      this.hasHeader = hasHeader
    });
  }

  public opcoesHeaderAbertas: boolean = false;
  public hasHeader: boolean = false;

  onMudouValor(evento: any){
    this.opcoesHeaderAbertas = evento;
  }
  
  ngOnInit(): void {
  }

  title = 'my-project';
}
