import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AutenticateService {

  constructor() { }

  autenticaLogin(){ 
    return true;
  }

  isAutenticado(autenticacao: any){
    return autenticacao
  }
}
