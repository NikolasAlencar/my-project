import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubscriberService {

  constructor() { }

  //Parte de abrir e fechar o header
  public opcoesAbertas = new Subject<boolean>();
  // Observable string streams
  aberto$ = this.opcoesAbertas.asObservable();
  // Service message commands
  abrirHeader(abrir: boolean) {
    this.opcoesAbertas.next(abrir);
  }
  //Parte de abrir e fechar o header

  //Parte de ter ou não o header
  public hasHeader = new Subject<boolean>();
  hasHeader$ = this.hasHeader.asObservable();
  verificaHasHeader(hasHeader: boolean) {
    this.hasHeader.next(hasHeader);
  }
  //Parte de ter ou não o header

  //Parte de exibir ou não o input de registro
  public hasExibirInput = new Subject<boolean>();
  exibirInput$ = this.hasExibirInput.asObservable();
  verificaHasExibirInput(hasExibirInput: boolean) {
    this.hasExibirInput.next(hasExibirInput);
  }
  //Parte de exibir ou não o input de registro

  //Parte de atualizar os dados da home
  private updateDataHome = new Subject();
  updateDataHome$ = this.updateDataHome.asObservable()
  updateData(data: any){
    this.updateDataHome.next(data)
  }
  //Parte de atualizar os dados da home
}
