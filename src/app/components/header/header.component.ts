import {Component} from '@angular/core'
import { MatDialog } from '@angular/material/dialog';
import {NewWordModal} from '../modals/newWord.modal';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls:['./header.component.css']
})
export class HeaderComponent{

  constructor(public dialog: MatDialog){};

  openDialog()
  {
    const dialogRef = this.dialog.open(NewWordModal, {
      width: '2000px',
    });
  }
}
