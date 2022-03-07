import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TelaInicioService } from './tela-inicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TelaInicioService]
})
export class AppComponent {

  constructor(private telaInicioService: TelaInicioService, private route: ActivatedRoute) { 
    this.telaInicioService.aberto$.subscribe(abrir => {
      const boo = new Boolean(abrir)
      this.opcoesHeaderAbertas = boo.valueOf()
    });
  }

  opcoesHeaderAbertas: boolean = false;

  onMudouValor(evento: any){
    this.opcoesHeaderAbertas = evento;
  }
  
  ngOnInit(): void { 
  }

  title = 'my-project';
}
