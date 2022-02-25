import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  providers: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  iconeSair: string = "..//src/assets/img/delete-sign.png";
  iconeLista: string = "..//src/assets/img/list--v1.png";

  opcoesHeaderAbertas: boolean = true;

  @Output() mudouOpcoesHeaderAbertas: EventEmitter<any> = new EventEmitter();

  abrirOpcoes(): void{
    if (this.opcoesHeaderAbertas === false){
      this.opcoesHeaderAbertas = true
    } else{
      this.opcoesHeaderAbertas = false
    }
    this.mudouOpcoesHeaderAbertas.emit(this.opcoesHeaderAbertas)
  }

  ngOnInit(): void {
  }
}
