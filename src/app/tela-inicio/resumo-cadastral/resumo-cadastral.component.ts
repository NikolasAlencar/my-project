import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-resumo-cadastral',
  templateUrl: './resumo-cadastral.component.html',
  styleUrls: ['./resumo-cadastral.component.css']
})
export class ResumoCadastralComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  @ViewChild('verLegenda', { static: true })
  verLegenda!: TemplateRef<any>

  abrirVerLegenda() {
    this.dialog.open(this.verLegenda)
  }

  ngOnInit(): void {
  }

}
