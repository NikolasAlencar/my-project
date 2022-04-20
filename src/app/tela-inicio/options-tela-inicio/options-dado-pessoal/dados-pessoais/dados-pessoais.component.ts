import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {

  public clienteConsultado: any = this.telaInicioService.clienteConsultado[0];

  
  public formulario: FormGroup = new FormGroup({
    'nomeCompleto': new FormControl(this.clienteConsultado.nome + ' ' + this.clienteConsultado.sobrenome, [Validators.required, Validators.minLength(20), Validators.maxLength(70)]),
    'cpf': new FormControl(this.clienteConsultado.cpf, [Validators.required, Validators.minLength(11), Validators.maxLength(14)]),
    'email': new FormControl(this.clienteConsultado.email, [Validators.required, Validators.minLength(20), Validators.maxLength(50)]),
    'nomeDaMae': new FormControl(this.clienteConsultado.nomeDaMae, [Validators.required, Validators.minLength(15), Validators.maxLength(100)]),
    'endereco': new FormGroup({
      'cep': new FormControl(this.clienteConsultado.endereco.cep, [Validators.required, Validators.minLength(7), Validators.maxLength(15)]),
      'logradouro': new FormControl(this.clienteConsultado.endereco.logradouro, [Validators.required, Validators.minLength(2), Validators.maxLength(20)]),
      'numero': new FormControl(this.clienteConsultado.endereco.numero, [Validators.required, Validators.minLength(1), Validators.maxLength(7)]),
      'cidade': new FormControl(this.clienteConsultado.endereco.cidade, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]),
      'bairro': new FormControl(this.clienteConsultado.endereco.bairro, [Validators.required, Validators.minLength(5), Validators.maxLength(30)]),
      'complemento': new FormControl(this.clienteConsultado.endereco.complemento, [Validators.maxLength(30)]),
      'estado': new FormControl(this.clienteConsultado.endereco.estado, [Validators.required, Validators.minLength(2), Validators.maxLength(2)])
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
  

  constructor(public telaInicioService: TelaInicioService) { }

  ngOnInit(): void { console.log(this.formulario) }

}
