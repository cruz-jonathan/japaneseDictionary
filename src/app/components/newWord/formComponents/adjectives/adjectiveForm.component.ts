import {Component, OnInit} from '@angular/core';
import {Adjective} from '../../wordModels/adjective.model';
import {WordsService} from '../../../services/words.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {ConfirmationModal} from '../../../modals/confirmation.modal';


@Component({
  selector: "adjective-form",
  templateUrl: "./adjectiveForm.component.html"
})
export class AdjectiveForm implements OnInit{
  adjectiveForm: FormGroup;
  adjective: Adjective;

  constructor(public wordsService: WordsService, public dialog: MatDialog){};

  ngOnInit(){
    this.adjectiveForm = new FormGroup({
      'japanese': new FormControl(null, {validators: [Validators.required], }),
      'english': new FormControl(null, {validators: [Validators.required], }),
      'context': new FormControl(null, {validators: [Validators.required], }),
    })
  }

  saveAdjective(){
    const adjective: Adjective={
      japanese: this.adjectiveForm.value.japanese,
      english: this.adjectiveForm.value.english,
      context: this.adjectiveForm.value.context
    }

    if (this.adjectiveForm.valid)
    {
      this.openDialog(adjective.japanese);
      this.wordsService.addAdjective(adjective);
      this.adjectiveForm.reset();
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

