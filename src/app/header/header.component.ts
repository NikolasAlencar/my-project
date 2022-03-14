import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})
export class HeaderComponent implements OnInit {

  constructor(private telaInicioService: TelaInicioService) { }

  iconeSair: string = "..//src/assets/img/delete-sign.png";
  iconeLista: string = "..//src/assets/img/list--v1.png";

  opcoesHeaderAbertas: boolean = false;

  @Output() mudouOpcoesHeaderAbertas: EventEmitter<any> = new EventEmitter();

  abrirOpcoes(): void{
    if (this.opcoesHeaderAbertas === false){
      this.opcoesHeaderAbertas = true
    } else{
      this.opcoesHeaderAbertas = false
    }
    this.mudouOpcoesHeaderAbertas.emit(this.opcoesHeaderAbertas)
    this.telaInicioService.abrirHeader(this.opcoesHeaderAbertas)
  }

  voltar = () => {
    this.telaInicioService.voltar()
  }

  ngOnInit(): void {
  }
}
