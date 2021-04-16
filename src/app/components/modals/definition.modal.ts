import {Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  japanese: string;
  english: string;
}

@Component({
  selector:"definition-modal",
  templateUrl: "./definition.modal.html",
})
export class DefinitionModal implements OnInit{
  japanese: string;
  english: string;

  constructor(
    public dialogRef: MatDialogRef<DefinitionModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ){}

  confirm(){
    this.dialogRef.close();
  }

  ngOnInit()
  {
    this.japanese=this.data.japanese;
    this.english = this.data.english;
  }

}
