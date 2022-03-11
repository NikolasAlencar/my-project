import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {

  constructor(private http: HttpClient) { }

  url_api = 'http://localhost:3000';

  //Posso reduzir todas essas chamadas a uma só.

  async obtemClienteByLogin(login: any){
    const retorno$ = this.http.get(`${this.url_api}/users?usuario=${login}`)
    return await lastValueFrom(retorno$)
  }

  async obtemClienteByCpf(cpf: any){
    const retorno$ = this.http.get(`${this.url_api}/clientes?cpf=${cpf}`)
    return await lastValueFrom(retorno$)
  }

  //Falta implementar
  async obtemClienteByAgenciaEConta(agenciaEConta: any){
    const retorno$ = this.http.get(`${this.url_api}/clientes?agenciaEConta=${agenciaEConta}`)
    return await lastValueFrom(retorno$)
  }

  async obtemClienteByCelular(celular: any){
    const retorno$ = this.http.get(`${this.url_api}/clientes?celular=${celular}`)
    return await lastValueFrom(retorno$)
  }

  async obtemClienteByUserId(userId: any){
    const retorno$ = this.http.get(`${this.url_api}/clientes?userId=${userId}`)
    return await lastValueFrom(retorno$)
  }
}
