import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { User } from 'src/assets/model/User';
import { AlertService } from './alert.service';
import { AutenticateService } from './autenticate.service';
import { EnviaMensagemService } from './envia-mensagem.service';
import { FactoryService } from './factory.service';
import { NavigateService } from './navigate.service';
import { randomNum } from 'src/assets/util/randomNum';

@Injectable({
  providedIn: 'root'
})
export class TelaInicioService {
  
  constructor(private autenticateService: AutenticateService, 
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

  public success: boolean = false;
  public cod: number = randomNum(1000, 9999);;
  public clienteConsultado: any;
  public url: string = '';
  private opcoesConsulta: Array<string> = ['Cpf', 'Agencia', 'Celular', 'UserId']
  private opcoesCod: Array<string> = ['Email enviado com sucesso!', 'Você não digitou o código']
  public historia: Array<string> = [''];
  private count: number = 0;
  
  //autenticação
  public autenticado: boolean = false;

  //Parte de abrir e fechar o header
  private opcoesAbertas = new Subject<boolean>();
  // Observable string streams
  aberto$ = this.opcoesAbertas.asObservable();
  // Service message commands
  abrirHeader(abrir: boolean) {
    this.opcoesAbertas.next(abrir);
  }
  //Parte de abrir e fechar o header

  //Parte de ter ou não o header
  private hasHeader = new Subject<boolean>();
  // Observable string streams
  hasHeader$ = this.hasHeader.asObservable();
  // Service message commands
  verificaHasHeader(hasHeader: boolean) {
    this.hasHeader.next(hasHeader);
  }
  //Parte de ter ou não o header

  //Parte de exibir ou não o input de registro
  private hasExibirInput = new Subject<boolean>();
  // Observable string streams
  exibirInput$ = this.hasExibirInput.asObservable();
  // Service message commands
  verificaHasExibirInput(hasExibirInput: boolean) {
    this.hasExibirInput.next(hasExibirInput);
  }
  //Parte de exibir ou não o input de registro

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
                this.navegarParaConsulta()
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
                this.navegarParaHome()
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
                this.navegarParaHome()
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
                this.navegarParaHome()
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

              // navega pra tela home
              setTimeout(() => {
                this.navegarParaHome()
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
          if(!this.autenticateService.validarLogin(user.usuario, user.senha) || this.user[0] !== undefined){
            this.alertService.showAlertInfo(`O usuário ${user.usuario} já está cadastrado ou não é válido. Por favor, escolha outro usuário que possua entre 7 e 20 caracteres e não tenha caracteres especiais.`)
            return
          }
          if(!this.autenticateService.validarEmail(user.email) || this.newUser[0] !== undefined){
            this.alertService.showAlertInfo(`O usuário ${user.email} já está cadastrado ou não é válido. Por favor, escolha outro.`)
            return
          }
          this.hasExibirInput.next(true)
          if(cod === undefined || null){
            this.alertService.showAlertInfo(this.opcoesCod[this.count])
            this.count === 0 ? this.enviaMensagem(user.email) : this.count = 1;
            return
          }
          if(Number(cod) === this.cod){
            this.success = true;
            this.factoryService.createUser(user)
          .then(() => {
            this.alertService.showAlertSuccess(`O usuário ${user.usuario} foi criado com sucesso!`)
          })
          .catch(e => console.log(e))
          }else{
            this.alertService.showAlertDanger('Código inválido!')
          }
        })
      })
  }

  enviaMensagem = (email: any) => {
    this.enviaMensagemService.enviaEmail(email, this.cod)
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
