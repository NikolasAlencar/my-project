import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { TelaInicioService } from 'src/app/tela-inicio.service';

@Component({
  selector: 'app-header-aberto',
  templateUrl: './header-aberto.component.html',
  styleUrls: ['./header-aberto.component.css']
})
export class HeaderAbertoComponent implements OnInit {

  constructor(private telaInicioService: TelaInicioService) { 
    this.telaInicioService.aberto$.subscribe(abrir => {
      const boo = new Boolean(abrir)
      this.opcoesHeaderAbertas = boo.valueOf()
      console.log(this.opcoesHeaderAbertas)
    });
  }

  @Output() fechouOpcoesHeaderAbertas: EventEmitter<any> = new EventEmitter();

  fecharOpcoes(): void{
    this.opcoesHeaderAbertas = false
    this.fechouOpcoesHeaderAbertas.emit(this.opcoesHeaderAbertas)
    this.telaInicioService.abrirHeader(this.opcoesHeaderAbertas)
  }

  opcoesHeaderAbertas: boolean = false;

  ngOnInit(): void {
  }

}
