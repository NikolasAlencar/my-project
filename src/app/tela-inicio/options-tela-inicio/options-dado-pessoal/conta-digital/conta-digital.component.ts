import { Component, OnInit } from '@angular/core';
import { TelaInicioService } from 'src/app/services/tela-inicio.service';

@Component({
  selector: 'app-conta-digital',
  templateUrl: './conta-digital.component.html',
  styleUrls: ['./conta-digital.component.css']
})
export class ContaDigitalComponent implements OnInit {

  constructor(public telaInicioService: TelaInicioService) { }

  ngOnInit(): void {
  }

}
