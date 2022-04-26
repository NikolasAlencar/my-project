import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { ModalOptions } from 'ngx-bootstrap/modal';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';
import { BottomSheetComponent } from '../components/bottom-sheet/bottom-sheet.component';
import { AlertService } from '../services/alert.service';
import { LoginService } from '../services/login.service';
import { RegisterService } from '../services/register.service';
import { SubscriberService } from '../services/subscriber.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  constructor(private telaInicioService: TelaInicioService,
              private registerService: RegisterService, 
              private loginService: LoginService,
              private route: ActivatedRoute, 
              private _bottomSheet: MatBottomSheet,
              private fb: FormBuilder,
              private subscriberService: SubscriberService,
              private alertService: AlertService) { }
              
    
  public login = this.fb.group({
    'usuario': [null ,[Validators.required, Validators.minLength(7), Validators.maxLength(20)]],
    'senha': [{}, [Validators.required, Validators.minLength(7), Validators.maxLength(20)]]
  })

  private urlAtual = this.route.snapshot.url.join('');
  public spinnerLoad: boolean = false;

  entrar = () => {
    try{
      if(this.login.valid === false){
        this.login.markAllAsTouched()
      }else{
        this.login.markAsUntouched()
        this.spinnerLoad = true
        this.loginService.user = this.login.value.usuario  
        this.loginService.entrar(this.login.value.usuario, this.login.value.senha); 
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
    this.subscriberService.verificaHasHeader(false)
    this.telaInicioService.adicionaHistoria(this.urlAtual)
    this.loginService.autenticado = false
    this.registerService.success = false
  }
}
