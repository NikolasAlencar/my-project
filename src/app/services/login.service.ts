import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { AutenticateService } from './autenticate.service';
import { FactoryService } from './factory.service';
import { NavigateService } from './navigate.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private alertService: AlertService,
              private factoryService: FactoryService,
              private autenticateService: AutenticateService,
              private navigateService: NavigateService) { }

  public user: any = {
    usuario: '',
    senha: ''
  };

  //autenticação
  public autenticado: boolean = true;

  entrar = (usuario: string, senha: string) => {
    // pega o cliente de acordo com o login
    this.factoryService.obtemClienteByLogin(usuario)
        .then(cliente => {
          this.user = { ...cliente }
          if(this.user[0] === undefined){
            this.alertService.showAlertInfo(`O usuário ${usuario} está incorreto ou não existe!`)
            return
          }
        })
        .then(() => {
          if(this.autenticateService.validarLogin(usuario, senha) && 
             this.autenticateService.autenticaLogin(this.user, usuario, senha) === true){

              // autentica o login
              this.autenticado = true

              // navega pra tela de consulta
              setTimeout(() => {
                this.navigateService.navegarParaConsulta()
              }, 3000);
          }else{
              this.alertService.showAlertDanger('Algo deu errado!')
          }
        })
        .catch(erro => console.log(erro))
  }
}
