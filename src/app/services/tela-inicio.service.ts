import { Injectable } from '@angular/core';
import { NavigateService } from './navigate.service';
import { ConsultarService } from './consultar.service';
import { UpdateService } from './update.service';
import { RegisterService } from './register.service';
import { retiraEspeciais } from 'src/assets/util/retiraEspeciais';
import { formalizaCpf } from 'src/assets/util/formalizaCpf';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class TelaInicioService {
  
  constructor(private navigateService: NavigateService,
              private consultarService: ConsultarService,
              private updateService: UpdateService,
              private registerService: RegisterService,
              private loginService: LoginService) { }

  public url: string = '';
  private opcoesConsulta: Array<string> = ['Cpf', 'Agencia', 'Celular', 'UserId']
  public historia: Array<string> = [''];

  consultarPorCpf = (cpf: any) => this.consultarService.consultarPorCpf(cpf)
  
  consultarPorAgenciaEConta = (agenciaEConta: any) => this.consultarService.consultarPorCpf(agenciaEConta)
  
  consultarPorCelular = (celular: any) => this.consultarService.consultarPorCelular(celular)

  consultarPorid = (id: any) => this.consultarService.consultarPorid(id)
  
  entrar = (usuario: any, senha: any) => this.loginService.entrar(usuario, senha)

  updateClient = (user: any) => this.updateService.updateClient(user)
  
  createUser = (user: any, cod: number) => this.registerService.createUser(user, cod)
  
  navegarParaLogin = () => this.navigateService.navegarParaLogin()
  
  navegarParaHome = () => this.navigateService.navegarParaHome()
  
  navegarParaConsulta = () => this.navigateService.navegarParaConsulta()
  
  navegarPara = (local: any) => this.navigateService.navegarPara(local)
  
  voltar = () => this.navigateService.voltar()
  
  adicionaHistoria = (historia: any) => this.navigateService.adicionaHistoria(historia)
  
  opcaoSelecionada(number: number){
    return this.opcoesConsulta[number-1]
  }

  //Posso melhorar essa parte?
  consultar(opcaoSelecionada: string, valorDigitado: any){
    switch(opcaoSelecionada){
      case 'Cpf':
        valorDigitado = formalizaCpf(valorDigitado)
        return this.consultarPorCpf(valorDigitado)
      case 'Agencia':
        return this.consultarPorAgenciaEConta(valorDigitado)
      case 'Celular':
        valorDigitado = retiraEspeciais(valorDigitado)
        return this.consultarPorCelular(valorDigitado)
      case 'UserId':
        return this.consultarPorid(valorDigitado)
    }
  }
}
