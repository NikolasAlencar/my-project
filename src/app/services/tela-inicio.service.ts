import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { User } from 'src/assets/model/User';
import { AlertService } from './alert.service';
import { AutenticateService } from './autenticate.service';
import { EnviaMensagemService } from './envia-mensagem.service';
import { FactoryService } from './factory.service';
import { NavigateService } from './navigate.service';

@Injectable({
  providedIn: 'root'
})
export class TelaInicioService {
  
  constructor(private router: Router, 
              private autenticateService: AutenticateService, 
              private navigateService: NavigateService,
              private factoryService: FactoryService,
              private alertService: AlertService,
              private enviaMensagemService: EnviaMensagemService) { }

  public user: any = {
    usuario: '',
    senha: ''
  };

  public newUser: any = {
    usuario: '',
    senha: ''
  };

  public exibeInput = new Subject<boolean>();
  abrirInput(abrir: any){
    this.exibeInput.next(abrir)
  }
  public success: boolean = false;
  public cod: any;
  public clienteConsultado: any;
  public url = '';
  private opcoesConsulta = ['Cpf', 'Agencia', 'Celular', 'UserId']
  public historia = [''];
  
  //autenticação
  autenticado = false;

  /* As partes abaixos podem ser trocadas por Subject<boolean> para diminuir o código?*/
  //Parte de abrir e fechar o header
  private opcoesAbertas = new Subject<string>();
  // Observable string streams
  aberto$ = this.opcoesAbertas.asObservable();
  // Service message commands
  abrirHeader(abrir: any) {
    this.opcoesAbertas.next(abrir);
  }
  //Parte de abrir e fechar o header

  //Parte de ter ou não o header
  private hasHeader = new Subject<string>();
  // Observable string streams
  hasHeader$ = this.hasHeader.asObservable();
  // Service message commands
  verificaHasHeader(hasHeader: any) {
    this.hasHeader.next(hasHeader);
  }
  //Parte de ter ou não o header
  /* As partes acima podem ser trocadas por Subject<boolean> para diminuir o código?*/

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
          if  (this.autenticateService.validarLogin(usuario, senha) && 
              this.autenticateService.autenticaLogin(this.user, usuario, senha) === true){

              // autentica o login
              this.autenticado = true

            // navega pra tela de consulta
            setTimeout(() => {
            this.router.navigate(['/consulta'])
            }, 3000);
          }else{
              this.alertService.showAlertDanger('Algo deu errado!')
          }
        })
        .catch(erro => console.log(erro))
  }

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

              // navega pra tela home
              setTimeout(() => {
              this.router.navigate(['/home'])
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

              // navega pra tela home
              setTimeout(() => {
              this.router.navigate(['/home'])
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

              // navega pra tela home
              setTimeout(() => {
              this.router.navigate(['/home'])
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
              alert('Id incorreto ou não existe')
              return
            }
            if (this.autenticateService.validarid(id) && 
                this.autenticateService.autenticaid(this.clienteConsultado, id) === true){

              // navega pra tela home
              setTimeout(() => {
              this.router.navigate(['/home'])
              }, 3000);
            }else{
              this.alertService.showAlertDanger('UserId Inválido!')
            }
          })
          .catch(erro => console.log(erro))  
  }

  //Depois tem que melhorar essa coisa ridicula
  createUser = (user: any, cod: number) => {
    this.factoryService.obtemClienteByLogin(user.usuario)
      .then(cliente => {
        this.user = { ...cliente }
      })
      .then(() => {
        this.factoryService.obtemClienteByEmail(user.email)
        .then(cliente => {
          this.newUser = { ...cliente }
          if(this.user[0] !== undefined){
            this.alertService.showAlertInfo(`O usuário ${user.usuario} já está cadastrado. Por favor, escolha outro.`)
            return
          }
          if(this.newUser[0] !== undefined){
            this.alertService.showAlertInfo(`O usuário ${user.email} já está cadastrado. Por favor, escolha outro.`)
            return
          }
          
          //if(cod === undefined || null){
          //  this.alertService.showAlertInfo('Você não digitou o código!')
          //  return
          //}
          if(this.autenticateService.validarLogin(user.usuario, user.senha) && Number(cod) === this.cod){
            this.success = true;
            this.factoryService.createUser(user)
          .then(() => {
            this.alertService.showAlertSuccess(`O usuário ${user.usuario} foi criado com sucesso!`)
          })
          .catch(e => console.log(e))
          }else{
            this.alertService.showAlertDanger('Dados inválidos!')
          }
        })
      })
  }

  enviaMensagem = (email: any, cod: any) => {
    this.enviaMensagemService.enviaEmail(email, cod)
  }

  navegarParaLogin = () => {
    this.navigateService.navegarParaLogin()
  }

  navegarParaHome = () => {
    this.navigateService.navegarParaHome()
  }

  navegarParaConsulta = () => {
    this.navigateService.navegarParaConsulta()
  }

  navegarPara = (local: any) => {
    this.navigateService.navegarPara(local)
  }

  voltar = () => {
    this.navigateService.voltar()
  }

  adicionaHistoria = (historia: any) => {
    this.navigateService.adicionaHistoria(historia)
  }

  opcaoSelecionada(number: number){
    return this.opcoesConsulta[number-1]
  }

  randomNum = (min: number, max: number) => {
    const number = Math.random() * (max - min) + min;
    return Math.trunc(number)
  }

  //Posso melhorar essa parte?
  consultar(opcaoSelecionada: any, valorDigitado: any){
    switch(opcaoSelecionada){
      case 'Cpf':
        return this.consultarPorCpf(valorDigitado)
      case 'Agencia':
        return this.consultarPorAgenciaEConta(valorDigitado)
      case 'Celular':
        return this.consultarPorCelular(valorDigitado)
      case 'UserId':
        return this.consultarPorid(valorDigitado)
    }
  }
}
