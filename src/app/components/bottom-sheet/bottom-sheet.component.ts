import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';
import { User } from 'src/assets/model/User';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>, 
              private _bottomSheet: MatBottomSheet, 
              private telaInicioService: TelaInicioService) { }

  public newUser: User = {
    usuario: '',
    senha: '',
  };
  public cod: any;
  public spinnerLoad: boolean = false;
  public exibeInputCod: boolean = false;

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  closeBottomSheet(): void {
    this._bottomSheet.dismiss(BottomSheetComponent);
  }

  registrar = () => {
    this.spinnerLoad = true;
    let cod;
    try{
      if(this.exibeInputCod === true){
        this.exibeInputCod = true; //
        cod = this.telaInicioService.randomNum(0, 9999)
        console.log(this.cod)
      }else{
        this.telaInicioService.newUser.usuario = this.newUser.usuario
        this.telaInicioService.newUser.senha = this.newUser.senha
        this.telaInicioService.createUser(this.newUser)
      }
    }catch(erro){
      console.log(erro)
    }finally{
      setTimeout(() => {
        this.spinnerLoad = false;
        this.telaInicioService.newUser.usuario === '' ? '' : this.closeBottomSheet()
        }, 3000);
    }
  }

  ngOnInit(): void {
  }
}
