import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {

  constructor(private http: HttpClient) { }

  url_api = 'http://localhost:3000';

  async obtemClienteByLogin(login: any){
    const retorno$ = this.http.get(`${this.url_api}/users?usuario=${login}`)
    return await lastValueFrom(retorno$)
  }

  async obtemClienteByCpf(cpf: any){
    const retorno$ = this.http.get(`${this.url_api}/clientes?cpf=${cpf}`)
    return await lastValueFrom(retorno$)
  }
}
