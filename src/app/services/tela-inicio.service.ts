import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from 'src/assets/model/User';
import { AutenticateService } from './autenticate.service';
import { FactoryService } from './factory.service';

@Injectable({
  providedIn: 'root'
})
export class TelaInicioService {
  //
  constructor(private router: Router, 
              private autenticateService: AutenticateService, 
              private factoryService: FactoryService) { }

  private user: any
  private clienteConsultado: any;

  private opcoesHeaderAbertas: boolean = true;
  private opcoesConsulta = ['Cpf', 'Agencia', 'Celular', 'UserId']
  usuario = '';
  senha = '';
  cpf = '';
  autenticado = false;

  //Parte de abrir e fechar o header
  private opcoesAbertas = new Subject<string>();
  // Observable string streams
  aberto$ = this.opcoesAbertas.asObservable();
  // Service message commands
  abrirHeader(abrir: any) {
    this.opcoesAbertas.next(abrir);
  }
  //Parte de abrir e fechar o header

  /*
  adicionaDados(dado: any){
    this.user = { ...this.user, ...dado }
  }
  */

  entrar = (usuario: string, senha: string) => {
    // pega o cliente de acordo com o login
    this.factoryService.obtemClienteByLogin(usuario)
        .then(cliente => {
          this.user = { ...cliente }
          if  (this.autenticateService.verificaLogin(usuario, senha) && 
              this.autenticateService.autenticaLogin(this.user, usuario, senha) === true){

              // autentica o login
              this.autenticado = true

             // navega pra tela de consulta
             setTimeout(() => {
              this.router.navigate(['/consulta'])
            }, 5000);
          }else{
              alert('Deu errado!')
          }
        })
        .catch(erro => console.log(erro))
  }

  consultarPorCpf = (cpf: any) => {
      // pega o cliente de acordo com o cpf
      this.factoryService.obtemClienteByCpf(cpf)
          .then(cliente => {
            this.clienteConsultado = { ...cliente }
            if (this.autenticateService.validarCPF(cpf) && 
                this.autenticateService.autenticaCpf(this.clienteConsultado, cpf) === true){

               // navega pra tela home
               setTimeout(() => {
                this.router.navigate(['/home'])
              }, 5000);
            }else{
              alert('CPF Inválido!')
            }
          })
          .catch(erro => console.log(erro))  
  }

  navegarParaLogin(){
    this.router.navigate([''])
  }

  navegarPara(local: any){
    this.router.navigate(['/' + local])
  }

  opcaoSelecionada(number: number){
    return this.opcoesConsulta[number-1]
  }
}
