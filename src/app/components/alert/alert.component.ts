import { Component, Input, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input() type: any;
  @Input() message: string | undefined;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }

}
