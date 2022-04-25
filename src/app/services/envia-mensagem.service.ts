import { Injectable } from '@angular/core';
import { FactoryService } from './factory.service';

@Injectable({
  providedIn: 'root'
})
export class EnviaMensagemService {

  constructor(private factoryService: FactoryService) {}

  public enviaEmailRegister(destinatario: string, cod: number){
    const corpoEmail = {
      to: destinatario,
      subject: "Código de Confirmação - Backoffice Wallet",
      message: `Olá, o seu código de verificação é o ${cod}`
    }
    this.factoryService.enviaEmail(corpoEmail)
  }
}
