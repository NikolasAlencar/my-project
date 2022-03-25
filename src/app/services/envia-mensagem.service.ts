import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviaMensagemService {

  constructor(private http: HttpClient) {}

  async enviaEmail(corpoEmail: Object){
    const retorno$  = this.http.post('http://localhost:3030', corpoEmail)
    return await lastValueFrom(retorno$)
  }
}
