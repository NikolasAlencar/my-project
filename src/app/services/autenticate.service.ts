import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticateService {

  constructor() { }

  autenticaLogin(user: any, usuario: any, senha: any){
    if(user[0].usuario === usuario && user[0].senha === senha){
      return true;
    }else{
      alert('O usuário ou senha estão incorretos!')
      return false;
    }
  }

  isAutenticado(autenticacao: any){
    return autenticacao
  }

  verificaLogin(login: string, senha: string): boolean{
    return login.length >= 7 && senha.length >= 7 ? true : false
  }
}
