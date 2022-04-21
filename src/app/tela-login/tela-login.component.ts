import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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

  public formulario: FormGroup = new FormGroup({
    'usuario': new FormControl(null ,[Validators.required, Validators.minLength(7), Validators.maxLength(20)]),
    'senha': new FormControl(null ,[Validators.required, Validators.minLength(7), Validators.maxLength(20)])
  })

  private urlAtual = this.route.snapshot.url.join('');

  public spinnerLoad: boolean = false;

  entrar = () => {
    try{
      if(this.formulario.valid === false){
        this.formulario.markAllAsTouched()
      }else{
        this.spinnerLoad = true
        this.telaInicioService.user = this.formulario.value.usuario  
        this.telaInicioService.entrar(this.formulario.value.usuario, this.formulario.value.senha); 
      }
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
    console.log(this.formulario.value)
    this.telaInicioService.verificaHasHeader(false)
    this.telaInicioService.adicionaHistoria(this.urlAtual)
    this.telaInicioService.autenticado = false
    this.telaInicioService.success = false
  }
}
