import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ConsultarService } from 'src/app/services/consultar.service';
import { SubscriberService } from 'src/app/services/subscriber.service';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';
import { juntaNome } from 'src/assets/util/juntaNome'

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {

  constructor(private telaInicioService: TelaInicioService,
              private fb: FormBuilder,
              private consultarService: ConsultarService,
              private subscriberService: SubscriberService) {

                this.subscriberService.updateDataHome$.subscribe(data => {
                  this.atualizaDados(data)
                })
              }

  public clienteConsultado: any = this.consultarService.clienteConsultado[0];

  
  public formulario = this.fb.group({
    'nomeCompleto': [this.clienteConsultado.nome + ' ' + this.clienteConsultado.sobrenome, [Validators.required, Validators.minLength(20), Validators.maxLength(70)]],
    'cpf': [this.clienteConsultado.cpf, [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
    'email': [this.clienteConsultado.email, [Validators.required, Validators.minLength(20), Validators.maxLength(50)]],
    'nomeDaMae': [this.clienteConsultado.nomeDaMae, [Validators.required, Validators.minLength(15), Validators.maxLength(100)]],
    'endereco': this.fb.group({
      'cep': [this.clienteConsultado.endereco.cep, [Validators.required, Validators.minLength(7), Validators.maxLength(15)]],
      'logradouro': [this.clienteConsultado.endereco.logradouro, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      'numero': [this.clienteConsultado.endereco.numero, [Validators.required, Validators.minLength(1), Validators.maxLength(7)]],
      'cidade': [this.clienteConsultado.endereco.cidade, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
      'bairro': [this.clienteConsultado.endereco.bairro, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]],
      'complemento': [this.clienteConsultado.endereco.complemento, [Validators.maxLength(30)]],
      'estado': [this.clienteConsultado.endereco.estado, [Validators.required, Validators.minLength(2), Validators.maxLength(2)]]
    }),
  })
  

  isFalse: boolean = false;

  public confirmar(): void{
    if(this.formulario.valid === false){
      this.formulario.markAllAsTouched()
    }
    else{
      this.formulario.markAsUntouched()
      this.clienteConsultado = Object.assign(this.clienteConsultado, this.formulario.value)
      this.telaInicioService.updateClient(this.clienteConsultado)
    }
  }

  public atualizaDados(dados: any){
    this.clienteConsultado = dados
    const nomeCompleto = juntaNome(this.clienteConsultado.nome, this.clienteConsultado.sobrenome)
    Object.assign(this.clienteConsultado, {nomeCompleto})
    this.formulario.patchValue(this.clienteConsultado)
    this.formulario.updateValueAndValidity();
  } 

  ngOnInit(): void { }
}
