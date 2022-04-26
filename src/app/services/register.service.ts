import { Injectable } from '@angular/core';
import { randomNum } from 'src/assets/util/randomNum';
import { AlertService } from './alert.service';
import { AutenticateService } from './autenticate.service';
import { EnviaMensagemService } from './envia-mensagem.service';
import { FactoryService } from './factory.service';
import { SubscriberService } from './subscriber.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private factoryService: FactoryService,
              private autenticateService: AutenticateService,
              private alertService: AlertService,
              private enviaMensagemService: EnviaMensagemService,
              private subscriberService: SubscriberService) { }

  private count: number = 0;
  private opcoesCod: Array<string> = ['Email enviado com sucesso!', 'Você não digitou o código']
  public cod: number = randomNum(1000, 9999);
  public success: boolean = false;

  public newUser: any = {
    usuario: '',
    senha: ''
  };

  public user: any = {
    usuario: '',
    senha: ''
  };

  createUser = (user: any, cod: number) => {
    Promise.all([
      this.factoryService.obtemClienteByLogin(user.usuario), 
      this.factoryService.obtemClienteByEmail(user.email)
    ]).then(([obtemByLogin, obtemByEmail]) => {
      this.user = { ...obtemByLogin }
      this.newUser = { ...obtemByEmail }
    }).then(() => {
      if(!this.validarUser(user)) {return}
      if(!this.validarEmail(user)) {return}
      this.subscriberService.hasExibirInput.next(true)
      if(!this.validarCod(user, cod)) {return}
      if(Number(cod) === this.cod){
        this.success = true;
        this.factoryService.createUser(user)
      .then(() => {
        this.alertService.showAlertSuccess(`O usuário ${user.usuario} foi criado com sucesso!`)
      })
      .catch(e => console.log(e))
      }else{
        this.alertService.showAlertDanger('Código inválido!', { class: 'modal-sm'})
      }
    })
  }

  enviaEmailRegister = (email: any) => {
    this.enviaMensagemService.enviaEmailRegister(email, this.cod)
  }

  validarUser = (user: any) => {
    if(!this.autenticateService.validarLogin(user.usuario, user.senha) || this.user[0] !== undefined){
      this.alertService.showAlertInfo(`O usuário ${user.usuario} já está cadastrado ou não é válido. Por favor, escolha outro usuário que possua entre 7 e 20 caracteres e não tenha caracteres especiais.`, { class: 'modal-xl'})
      return false
    }
    return true
  }

  validarEmail = (user: any) => {
    if(!this.autenticateService.validarEmail(user.email) || this.newUser[0] !== undefined){
      this.alertService.showAlertInfo(`O email ${user.email} já está cadastrado ou não é válido. Por favor, escolha outro.`, { class: 'modal-xl'})
      return false
    }
    return true
  }

  validarCod = (user:any, cod: any) => {
    if(cod === undefined || null){
      this.alertService.showAlertInfo(this.opcoesCod[this.count])
      this.count === 0 ? this.enviaEmailRegister(user.email) : this.count = 1;
      return false
    }
    return true
  }
}
