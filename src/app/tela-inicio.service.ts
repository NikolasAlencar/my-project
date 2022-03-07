import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TelaInicioService {
  
  constructor(private router: Router) { }

  private opcoesHeaderAbertas: boolean = true;
  private opcoesConsulta = ['Cpf', 'Agencia', 'Celular', 'UserId']

  //Parte de abrir e fechar o header
  private opcoesAbertas = new Subject<string>();
  // Observable string streams
  aberto$ = this.opcoesAbertas.asObservable();
  // Service message commands
  abrirHeader(abrir: any) {
    this.opcoesAbertas.next(abrir);
  }
  //Parte de abrir e fechar o header

  entrar = (login: string, senha: string) => {
    if (this.verificaLogin(login, senha) === true){
      this.router.navigate(['/consulta'])
    }else{
      alert('Deu errado!')
    }
  }

  consultarPorCpf = (cpf: any) => {
    if(this.validarCPF(cpf)){
      this.router.navigate(['/home'])
    }else{
      alert('CPF Inválido!')
    }
  }
    
  verificaLogin(login: string, senha: string): boolean{
    return login.length >= 7 && senha.length >= 7 ? true : false
  }

  navegarPara(local: any){
    this.router.navigate(['/' + local])
  }

  validarCPF(cpf: any) {	
    cpf = cpf.replace(/[^\d]+/g,'');	
    if(cpf == '') return false;	
    // Elimina CPFs invalidos conhecidos	
    if (cpf.length != 11 || 
      cpf == "00000000000" || 
      cpf == "11111111111" || 
      cpf == "22222222222" || 
      cpf == "33333333333" || 
      cpf == "44444444444" || 
      cpf == "55555555555" || 
      cpf == "66666666666" || 
      cpf == "77777777777" || 
      cpf == "88888888888" || 
      cpf == "99999999999")
        return false;		
    // Valida 1o digito	
    let add = 0;	
    for (let i=0; i < 9; i ++)		
      add += parseInt(cpf.charAt(i)) * (10 - i);	
      let rev = 11 - (add % 11);	
      if (rev == 10 || rev == 11)		
        rev = 0;	
      if (rev != parseInt(cpf.charAt(9)))		
        return false;		
    // Valida 2o digito	
    add = 0;	
    for (let i = 0; i < 10; i ++)		
      add += parseInt(cpf.charAt(i)) * (11 - i);	
    rev = 11 - (add % 11);	
    if (rev == 10 || rev == 11)	
      rev = 0;	
    if (rev != parseInt(cpf.charAt(10)))
      return false;		
    return true;   
  }

  opcaoSelecionada(number: number){
    return this.opcoesConsulta[number-1]
  }
}
