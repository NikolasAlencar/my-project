import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal'
import { AlertComponent } from '../components/alert/alert.component';

export enum AlertTypes{
  DANGER = 'danger',
  SUCCESS = 'success',
  WARNING = 'warning',
  INFO = 'info',
  LIGHT = 'light',
  DARK = 'dark'
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private modalService: BsModalService) { }

  showAlert(message: string, type: string){
    const bsModalRef: BsModalRef = this.modalService.show(AlertComponent)
    bsModalRef.content.type = type;
    bsModalRef.content.message = message
  }

  showAlertDanger(message: string){
    this.showAlert(message, AlertTypes.DANGER)
  }

  showAlertSuccess(message: string){
    this.showAlert(message, AlertTypes.SUCCESS)
  }
  
  showAlertWarning(message: string){
    this.showAlert(message, AlertTypes.WARNING)
  }

  showAlertInfo(message: string){
    this.showAlert(message, AlertTypes.INFO)
  }

  showAlertLight(message: string){
    this.showAlert(message, AlertTypes.LIGHT)
  }

  showAlertDark(message: string){
    this.showAlert(message, AlertTypes.DARK)
  }
}
