import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { AlertService } from 'src/app/services/alert.service';
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
              private telaInicioService: TelaInicioService,
              private alertService: AlertService) {}

  public newUser: User = {
    usuario: '',
    senha: '',
    email: ''
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
    let cod: any
    try{
      if(this.exibeInputCod === false){
        this.exibeInputCod = true;
        cod = this.telaInicioService.randomNum(1000, 9999);
        this.telaInicioService.cod = cod;
        this.telaInicioService.enviaMensagem(this.newUser.email, cod)
      }else{
        this.telaInicioService.createUser(this.newUser, this.cod)
      }
    }catch(erro){
      console.log(erro)
    }finally{
      setTimeout(() => {
        this.spinnerLoad = false;
        this.telaInicioService.success === true ? this.closeBottomSheet() : ''
        this.telaInicioService.success = false;
        }, 1500);
    }
  }

  ngOnInit(): void {
  }
}
