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
              private telaInicioService: TelaInicioService) {

                this.telaInicioService.exibirInput$.subscribe(exibeInput => {
                  this.exibeInputCod = exibeInput
                });
              }

  public newUser: User = {
    usuario: '',
    senha: '',
    email: ''
  };
  
  public cod: any;
  public spinnerLoad: boolean = false;
  public exibeInputCod: boolean = false;

  closeBottomSheet(): void {
    this._bottomSheet.dismiss(BottomSheetComponent);
  }

  registrar = () => {
    this.spinnerLoad = true;
    try{
      this.telaInicioService.createUser(this.newUser, this.cod)
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
