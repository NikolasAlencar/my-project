import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  constructor(private telaInicioService: TelaInicioService, private route: ActivatedRoute) { 
    this.telaInicioService.hasHeader$.subscribe(hasHeader => {
      const boo = new Boolean(hasHeader)
      this.hasHeader = boo.valueOf()
    });
  }

  urlAtual = this.route.snapshot.url.join('');

  public usuario: string= '';
  public senha: string = '';
  public autenticado: boolean = false;
  public spinnerLoad: boolean = false;
  public hasHeader: boolean = false;

  entrar = () => {
    this.spinnerLoad = true
    try{ 
      this.telaInicioService.usuario = this.usuario;  
      this.telaInicioService.senha = this.senha;    
      this.telaInicioService.entrar(this.usuario, this.senha); 
    }catch(erro){
      console.log('Erro: ' + erro);
    }finally{
      this.spinnerLoad = false;
    } 
  }

  ngOnInit(): void {
    this.telaInicioService.verificaHasHeader(this.hasHeader = false)
    this.telaInicioService.adicionaHistoria(this.urlAtual)
    this.telaInicioService.autenticado = false
  }

  // teste para abrir o spinner, as requisições estão muito rapidas
  abrirSpinner(){
    //return
    //this.spinnerLoad = true;
  }
}
