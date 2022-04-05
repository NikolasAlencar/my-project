import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FactoryService {

  constructor(private http: HttpClient) { }

  public url_api: string = 'http://localhost:3000';

  //Posso reduzir todas essas chamadas a uma só.
  async obtemClienteByLogin(login: string){
    const retorno$ = this.http.get(`${this.url_api}/users?usuario=${login}`)
    return await lastValueFrom(retorno$)
    .catch(error => console.log(error))
  }

  async obtemClienteByEmail(email: string){
    const retorno$ = this.http.get(`${this.url_api}/users?email=${email}`)
    return await lastValueFrom(retorno$)
    .catch(error => console.log(error))
  }

  async obtemClienteByCpf(cpf: string){
    const retorno$ = this.http.get(`${this.url_api}/clientes?cpf=${cpf}`)
    return await lastValueFrom(retorno$)
    .catch(error => console.log(error))
  }

  async obtemClienteByAgenciaEConta(conta: string){
    const retorno$ = this.http.get(`${this.url_api}/clientes?conta=${conta}`)
    return await lastValueFrom(retorno$)
    .catch(error => console.log(error))
  }

  async obtemClienteByCelular(celular: string){
    const retorno$ = this.http.get(`${this.url_api}/clientes?celular=${celular}`)
    return await lastValueFrom(retorno$)
    .catch(error => console.log(error))
  }

  async obtemClienteByid(id: string){
    const retorno$ = this.http.get(`${this.url_api}/clientes?id=${id}`)
    return await lastValueFrom(retorno$)
    .catch(error => console.log(error))
  }

  async createUser(user: string){
    const retorno$ = this.http.post(`${this.url_api}/users`, user)
    return await lastValueFrom(retorno$)
    .catch(error => console.log(error))
  }

  async enviaEmail(corpoEmail: any){
    const retorno$ = this.http.post('http://localhost:3030', corpoEmail)
    return await lastValueFrom(retorno$)
    .catch(error => console.log(error))
  }
}
