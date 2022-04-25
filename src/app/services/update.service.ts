import { Injectable } from '@angular/core';
import { separaNome } from 'src/assets/util/separaNome';
import { FactoryService } from './factory.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private factoryService: FactoryService) { }

  updateClient = (user: any) => {
    const { nome, sobrenome } = separaNome(user.nomeCompleto)
    delete user.nomeCompleto
    user.nome = nome
    user.sobrenome = sobrenome
    this.factoryService.updateClient(user)
  }
}
