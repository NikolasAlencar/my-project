import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options-crivo',
  templateUrl: './options-crivo.component.html',
  styleUrls: ['./options-crivo.component.css']
})
export class OptionsCrivoComponent implements OnInit {

  constructor() { }

  public opcoes: any = [{nome: 'Verifica Idade do Cliente', id: 1},
                        {nome: 'Serasa B49C - Credit Bureau Base de Inconsistência', id: 2}, 
                        {nome: 'Resolv - Pesquisa de óbito Completa', id: 3},
                        {nome: 'Verifica CEP', id: 4},
                        {nome: 'Verifica Número', id: 5}, 
                        {nome: 'Verifica Nome Cliente', id: 6},
                        {nome: 'Verifica Telefone Celular', id: 7},
                        {nome: 'Verifica status CPF', id: 8}, 
                        {nome: 'Verifica restrição interna', id: 9},
                        {nome: 'Validação cadastral', id: 10}, 
                        {nome: 'Avaliação de riscos', id: 11},
                        {nome: 'Verificação de crédito', id: 12}, 
                        {nome: 'Risco de fraude', id: 13},
                        {nome: 'Verificação de sei lá oque', id:14}];

  public legendas: any = ['green', 'red', 'yellow', 'grey']

  public status: string = `Aprovado`;
  public codAnalise: string = `0038ep`;

  ngOnInit(): void {
  }

}
