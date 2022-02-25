import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TelaInicioService } from '../tela-inicio.service';

@Component({
  selector: 'app-tela-login',
  templateUrl: './tela-login.component.html',
  styleUrls: ['./tela-login.component.css']
})
export class TelaLoginComponent implements OnInit {

  constructor(private route: ActivatedRoute, private telaInicioService: TelaInicioService) { }

  snapshot: any = this.route.snapshot.url.join('');

  ngOnInit(): void { 
  }
}
