import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class NavigateService {
  
  constructor(private router: Router) { }

  public historia: Array<string> = [''];
  public autenticado: boolean = false;

  navegarParaLogin(){
    this.router.navigate([''])
  }

  navegarParaHome(){
    this.router.navigate(['/home'])
  }

  navegarParaConsulta(){
    this.router.navigate(['/consulta'])
  }

  navegarOpcaoSelecionada(local: string) {
    this.router.navigate(['/home/' + local])
  }

  navegarPara(local: string){
    this.router.navigate(['/' + local])
  }

  voltar(){
    if(this.historia[this.historia.length - 1] === 'consulta'){
      this.autenticado = false;
    }
    this.navegarPara(this.historia[this.historia.length - 2])
    this.historia.pop()
  }

  adicionaHistoria(historia: any){
    if (historia !== this.historia[this.historia.length - 1]){
      this.historia.push(historia)
    }
  }
}
