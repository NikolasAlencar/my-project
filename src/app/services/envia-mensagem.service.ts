import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviaMensagemService {

  constructor(private http: HttpClient) {}

  async enviaEmail(destinatario: string, cod: number){
    const corpoEmail = {
      to: destinatario,
      subject: "Código de Confirmação - Backoffice Wallet",
      message: `Olá, o seu código de verificação é o ${cod}`
    }
    const retorno$ = this.http.post('http://localhost:3030', corpoEmail)
    return await lastValueFrom(retorno$)
    .catch(error => console.log(error))
  }
}
