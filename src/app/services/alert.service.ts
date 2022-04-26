import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService, ModalOptions } from 'ngx-bootstrap/modal'
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

  public config: ModalOptions = { class: 'modal-sm' };
  
  showAlert(message: string, type: string, config?: any){
    const bsModalRef: BsModalRef = this.modalService.show(AlertComponent, config)
    bsModalRef.content.type = type;
    bsModalRef.content.message = message
  }

  showAlertDanger(message: string, config?: any){
    this.showAlert(message, AlertTypes.DANGER, config)
  }

  showAlertSuccess(message: string, config?: any){
    this.showAlert(message, AlertTypes.SUCCESS, config)
  }
  
  showAlertWarning(message: string, config?: any){
    this.showAlert(message, AlertTypes.WARNING, config)
  }

  showAlertInfo(message: string, config?: any){
    this.showAlert(message, AlertTypes.INFO, config)
  }

  showAlertLight(message: string, config?: any){
    this.showAlert(message, AlertTypes.LIGHT, config)
  }

  showAlertDark(message: string, config?: any){
    this.showAlert(message, AlertTypes.DARK, config)
  }
}
