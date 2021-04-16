import {Component} from '@angular/core'
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: "newWord-modal",
  templateUrl: './newWord.modal.html',
})
export class NewWordModal{

  constructor(public dialogRef: MatDialogRef<NewWordModal>){}

  confirm() {
    this.dialogRef.close();
  }

}
