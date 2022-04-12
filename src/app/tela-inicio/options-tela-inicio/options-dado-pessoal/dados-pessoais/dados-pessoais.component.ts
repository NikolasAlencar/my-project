import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';

@Component({
  selector: 'app-dados-pessoais',
  templateUrl: './dados-pessoais.component.html',
  styleUrls: ['./dados-pessoais.component.css']
})
export class DadosPessoaisComponent implements OnInit {

  clienteConsultado: any = this.telaInicioService.clienteConsultado[0]

  public formulario: FormGroup = new FormGroup({
    'nomeCompleto': new FormControl(this.clienteConsultado.nome + ' ' + this.clienteConsultado.sobrenome),
    'cpf': new FormControl(this.clienteConsultado.cpf),
    'email': new FormControl(this.clienteConsultado.email),
    'nomeDaMae': new FormControl(this.clienteConsultado.nomeDaMae),
    'dataDeNascimento': new FormControl(this.clienteConsultado.dataDeNascimento),
    'cep': new FormControl(this.clienteConsultado.endereco.cep),
    'logradouro': new FormControl(this.clienteConsultado.endereco.logradouro),
    'numero': new FormControl(this.clienteConsultado.endereco.numero),
    'cidade': new FormControl(this.clienteConsultado.endereco.cidade),
    'bairro': new FormControl(this.clienteConsultado.endereco.bairro),
    'complemento': new FormControl(this.clienteConsultado.endereco.complemento),
    'estado': new FormControl(this.clienteConsultado.endereco.estado)
  })

  isFalse: boolean = false;

  public confirmar(): void{
    console.log(this.formulario)
  }

  constructor(public telaInicioService: TelaInicioService) { }

  ngOnInit(): void {
    console.log(this.clienteConsultado)
  }

}
