import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private telaInicioService: TelaInicioService) { }

  snapshot: any = this.route.snapshot.url.join('');

  public usuario: string= '';
  public senha: string = '';
  public autenticado: boolean = false;

  entrar = () => {
    
    this.telaInicioService.usuario = this.usuario  
    this.telaInicioService.senha = this.senha    
    this.telaInicioService.entrar(this.usuario, this.senha)
    this.autenticado = this.telaInicioService.autenticado;
    console.log(
      this.telaInicioService.usuario,
      this.telaInicioService.senha,
      this.telaInicioService.autenticado)
  }

  ngOnInit(): void { 
    console.log(this.autenticado)
  }
}
