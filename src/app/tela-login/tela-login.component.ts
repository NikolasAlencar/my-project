import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';
import { BottomSheetComponent } from '../components/bottom-sheet/bottom-sheet.component';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  constructor(private telaInicioService: TelaInicioService, 
              private route: ActivatedRoute, 
              private _bottomSheet: MatBottomSheet) { }

  private urlAtual = this.route.snapshot.url.join('');

  public user: any = {
    usuario: '',
    senha: '',
  }

  public spinnerLoad: boolean = false;

  entrar = () => {
    this.spinnerLoad = true
    try{
      this.telaInicioService.user = this.user   
      this.telaInicioService.entrar(this.user.usuario, this.user.senha); 
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
    this.telaInicioService.verificaHasHeader(false)
    this.telaInicioService.adicionaHistoria(this.urlAtual)
    this.telaInicioService.autenticado = false
    this.telaInicioService.success = false
  }
}
