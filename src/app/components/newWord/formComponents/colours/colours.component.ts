import {Component, OnInit} from '@angular/core'
import {Validators, FormControl, FormGroup} from '@angular/forms'
import {WordsService} from '../../../services/words.service';
import {Colour} from '../../wordModels/colour.model';
import {MatDialog} from '@angular/material/dialog';
import {ConfirmationModal} from '../../../modals/confirmation.modal';

@Component ({
  selector: 'newColourComponent',
  templateUrl: 'colours.component.html'
})
export class NewColoursComponent implements OnInit{
  colourForm: FormGroup;
  colour : Colour;

  constructor(public wordsService: WordsService, public dialog: MatDialog){}

  ngOnInit(){
    this.colourForm = new FormGroup({
      'japanese': new FormControl(null, {validators: [Validators.required], }),
      'english':  new FormControl(null, {validators: [Validators.required]}),
      'hex':  new FormControl(null, {validators: [Validators.required, Validators.minLength(7), Validators.maxLength(7)]})
    })
  }

  saveColour(){
    const colour: Colour = {
      id: null,
      japanese: this.colourForm.value.japanese,
      english: this.colourForm.value.english,
      hex: this.colourForm.value.hex
    }
    if (this.colourForm.valid)
    {
      this.openDialog(colour.japanese);
      this.wordsService.addColour(colour);
      this.colourForm.reset();
    }
  }

  openDialog(word: string)
  {
    const dialogRef = this.dialog.open(ConfirmationModal, {
      width: '250px',
      data:{word}
    });
  }
}
