import { Component } from '@angular/core';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TelaInicioService]
})
export class AppComponent {

  constructor(private telaInicioService: TelaInicioService) { 
    this.telaInicioService.aberto$.subscribe(abrir => {
      this.opcoesHeaderAbertas = abrir
    });
    this.telaInicioService.hasHeader$.subscribe(hasHeader => {
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
