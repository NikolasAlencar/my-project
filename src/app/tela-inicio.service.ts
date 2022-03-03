import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelaInicioService {

  constructor() { }

  opcoesHeaderAbertas: boolean = true;

  private opcoesAbertas = new Subject<string>();
  
  // Observable string streams
  aberto$ = this.opcoesAbertas.asObservable();
  
  // Service message commands
  abrirHeader(abrir: any) {
    this.opcoesAbertas.next(abrir);
  }
}
