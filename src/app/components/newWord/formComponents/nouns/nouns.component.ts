import {Component, OnInit} from '@angular/core';
import {Validators, FormControl, FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {WordsService} from '../../../services/words.service';
import {Noun} from '../../wordModels/noun.model'
import {ConfirmationModal} from '../../../modals/confirmation.modal';

@Component ({
  selector: 'newNounsComponent',
  templateUrl: 'nouns.component.html'
})
export class NewNounsComponent implements OnInit{
  nounForm: FormGroup;
  noun: Noun;

  constructor(public wordsService: WordsService, public dialog: MatDialog){};

  ngOnInit(){
    this.nounForm = new FormGroup({
      'japanese': new FormControl(null, {validators: [Validators.required], }),
      'english': new FormControl(null, {validators: [Validators.required], }),
      'context': new FormControl(null, {validators: [Validators.required], }),
    })
  }

  saveNoun(){
    const noun: Noun = {
      japanese: this.nounForm.value.japanese,
      english: this.nounForm.value.english,
      context: this.nounForm.value.context
    }
    if (this.nounForm.valid)
    {
      this.wordsService.addNoun(noun);
      this.nounForm.reset();
      this.openDialog(noun.japanese)
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
