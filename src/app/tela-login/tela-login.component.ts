import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';
import { BottomSheetComponent } from '../components/bottom-sheet/bottom-sheet.component';
import { EnviaMensagemService } from '../services/envia-mensagem.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  constructor(private telaInicioService: TelaInicioService, 
              private route: ActivatedRoute, 
              private _bottomSheet: MatBottomSheet,
              private enviaMensagemService: EnviaMensagemService) {

    this.telaInicioService.hasHeader$.subscribe(hasHeader => {
      const boo = new Boolean(hasHeader)
      this.hasHeader = boo.valueOf()
    });
  }

  urlAtual = this.route.snapshot.url.join('');

  public usuario: string= '';
  public senha: string = '';
  public spinnerLoad: boolean = false;
  public autenticado: boolean = false;
  public hasHeader: boolean = false;

  entrar = () => {
    this.spinnerLoad = true
    const corpoEmail = {
      to:"nikolasalencarrs73@gmail.com",
      subject:"Envio de email com TS",
      message:"Envio de email com TS"
    }
    //this.enviaMensagemService.enviaEmail(corpoEmail)
    try{ 
      this.telaInicioService.user.usuario = this.usuario;  
      this.telaInicioService.user.senha = this.senha;    
      this.telaInicioService.entrar(this.usuario, this.senha); 
    }catch(erro){
      console.log('Erro: ' + erro);
    }finally{
      setTimeout(() => {
        this.spinnerLoad = false;
        }, 3000);
    } 
  }

  openBottomSheet(): void {
    this._bottomSheet.open(BottomSheetComponent);
  }

  ngOnInit(): void {
    this.telaInicioService.verificaHasHeader(this.hasHeader = false)
    this.telaInicioService.adicionaHistoria(this.urlAtual)
    this.telaInicioService.autenticado = false
  }
}
