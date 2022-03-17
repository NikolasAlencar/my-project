import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.css']
})
export class BottomSheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>, private _bottomSheet: MatBottomSheet) { }

  public usuario: string= '';
  public senha: string = '';
  public spinnerLoad: boolean = false;

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  closeBottomSheet(): void {
    this._bottomSheet.dismiss(BottomSheetComponent);
  }

  registrar = () => {
    this.spinnerLoad = true;
  }

  ngOnInit(): void {
  }

}
