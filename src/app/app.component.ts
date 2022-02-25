import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TelaInicioService } from './tela-inicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TelaInicioService]
})
export class AppComponent {

  constructor(private route: ActivatedRoute) { }

  //OpçõesHeader
  snapshot: any = this.route.snapshot.url.join('');

  opcoesHeaderAbertas: boolean = true;

  onMudouValor(evento: any){
    this.opcoesHeaderAbertas = evento;
  }
  
  ngOnInit(): void {
  }

  title = 'my-project';
}
