import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { RegisterService } from 'src/app/services/register.service';
import { SubscriberService } from 'src/app/services/subscriber.service';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';
import { User } from 'src/assets/model/User';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

  constructor(private registerService: RegisterService,
              private subscriberService: SubscriberService,
              private _bottomSheet: MatBottomSheet, 
              private telaInicioService: TelaInicioService) {

                this.subscriberService.exibirInput$.subscribe(exibeInput => {
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
        this.registerService.success === true ? this.closeBottomSheet() : ''
        this.registerService.success = false;
        }, 1500);
    }
  }

  ngOnInit(): void {
  }
}
