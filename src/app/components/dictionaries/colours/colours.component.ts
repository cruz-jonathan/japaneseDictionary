import {Component , OnInit} from '@angular/core'
import { Subscription } from 'rxjs';
import { WordsService } from '../../services/words.service';
import {Colour} from '../../newWord/wordModels/colour.model';
import {MatDialog} from '@angular/material/dialog';
import { DefinitionModal } from '../../modals/definition.modal';

@Component({
  selector: 'colourComponent',
  templateUrl:'./colours.component.html',
  styleUrls:['./colours.component.css']
})


export class ColorsComponent implements OnInit{
  colours: Colour[];
  private colourSub: Subscription;

  constructor(public wordsService: WordsService, public dialog: MatDialog){};


  ngOnInit(){
    this.wordsService.getColours();
    this.colourSub = this.wordsService.getColourUpdateListener()
    .subscribe((colours: Colour[])=>{
      this.colours = colours;
    })
  }

  openDialog(japanese: string, english: string)
  {
    const dialogRef = this.dialog.open(DefinitionModal, {
      width: '250px',
      data:{japanese, english}
    });
  }
}
