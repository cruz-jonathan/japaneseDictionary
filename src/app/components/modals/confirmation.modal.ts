import {Component, Inject, OnInit} from '@angular/core'
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData{
  word: string;
}

@Component({
  selector: "confirm-modal",
  templateUrl: "./confirmation.modal.html",
})
export class ConfirmationModal implements OnInit{
  word: string;

  constructor(
    public dialogRef: MatDialogRef<ConfirmationModal>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ){}


  ngOnInit(){
    this.word = this.data.word;
  }

  confirm(){
    this.dialogRef.close();
  }
}
