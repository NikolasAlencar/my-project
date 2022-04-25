import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { AutenticateService } from './autenticate.service';
import { FactoryService } from './factory.service';
import { NavigateService } from './navigate.service';
import { SubscriberService } from './subscriber.service';

@Injectable({
  providedIn: 'root'
})
export class ConsultarService {

  constructor(private factoryService: FactoryService,
              private autenticateService: AutenticateService,
              private alertService: AlertService,
              private navigateService: NavigateService,
              private subscriberService: SubscriberService) { }

  public clienteConsultado: any;

  consultarPorCpf = (cpf: any) => {
    // pega o cliente de acordo com o cpf
    this.factoryService.obtemClienteByCpf(cpf)
        .then(cliente => {
          this.clienteConsultado = { ...cliente }           
          if(this.clienteConsultado[0] === undefined){
            this.alertService.showAlertInfo(`O cpf ${cpf} está incorreto ou não existe!`)
            return
          }
          if (this.autenticateService.validarCPF(cpf) && 
              this.autenticateService.autenticaCpf(this.clienteConsultado, cpf) === true){

            // dispara um evento enviando os dados do cliente consultado
            this.subscriberService.updateData(this.clienteConsultado[0])

            // navega pra tela home
            setTimeout(() => {
              this.navigateService.navegarParaHome()
            }, 3000);
          }else{
            this.alertService.showAlertDanger('CPF inválido!')
          }
        })
        .catch(erro => console.log(erro))  
  }

  consultarPorAgenciaEConta = (agenciaEConta: any) => {
    const agencia = agenciaEConta.split('/')[0]
    const conta = agenciaEConta.split('/')[1]
      // pega o cliente de acordo com o cpf
      this.factoryService.obtemClienteByAgenciaEConta(conta)
          .then(cliente => {
            this.clienteConsultado = { ...cliente }           
            if(this.clienteConsultado[0] === undefined){
              this.alertService.showAlertInfo(`Agência ${agencia} ou Conta ${conta} incorretas ou não existem!`)
              return
            }
            if (this.autenticateService.validarAgenciaEConta(agenciaEConta) && 
                this.autenticateService.autenticaAgenciaEConta(this.clienteConsultado, agencia, conta) === true){

              // dispara um evento enviando os dados do cliente consultado
              this.subscriberService.updateData(this.clienteConsultado[0])  
              
              // navega pra tela home
              setTimeout(() => {
                this.navigateService.navegarParaHome()
              }, 3000);
            }else{
              this.alertService.showAlertDanger('Agencia ou Conta Inválida!')
            }
          })
          .catch(erro => console.log(erro))  
  }

  consultarPorCelular = (celular: any) => {
      // pega o cliente de acordo com o cpf
      this.factoryService.obtemClienteByCelular(celular)
          .then(cliente => {
            this.clienteConsultado = { ...cliente }     
            if(this.clienteConsultado[0] === undefined){
              this.alertService.showAlertInfo(`Número de celular ${celular} incorreto ou não existe!`)
              return
            }
            if (this.autenticateService.validarCelular(celular) && 
                this.autenticateService.autenticaCelular(this.clienteConsultado, celular) === true){

              // dispara um evento enviando os dados do cliente consultado
              this.subscriberService.updateData(this.clienteConsultado[0]) 

              // navega pra tela home
              setTimeout(() => {
                this.navigateService.navegarParaHome()
              }, 3000);
            }else{
              this.alertService.showAlertDanger('Celular Inválido!')
            }
          })
          .catch(erro => console.log(erro))  
  }

  consultarPorid = (id: any) => {
      // pega o cliente de acordo com o cpf
      this.factoryService.obtemClienteByid(id)
          .then(cliente => {
            this.clienteConsultado = { ...cliente }
            if(this.clienteConsultado[0] === undefined){
              this.alertService.showAlertInfo(`ID ${id} incorreto ou não existe!`)
              return
            }
            if (this.autenticateService.validarId(id) && 
                this.autenticateService.autenticaId(this.clienteConsultado, id) === true){
                
              // dispara um evento enviando os dados do cliente consultado
              this.subscriberService.updateData(this.clienteConsultado[0]) 

              // navega pra tela home
              setTimeout(() => {
                this.navigateService.navegarParaHome()
              }, 3000);
            }else{
              this.alertService.showAlertDanger('UserId Inválido!')
            }
          })
          .catch(erro => console.log(erro))  
  }
}
