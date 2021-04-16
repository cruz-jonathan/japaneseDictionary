import {Component, OnInit} from '@angular/core';
import {FormGroup, Validators, FormControl} from '@angular/forms'
import { MatDialog } from '@angular/material/dialog';
import {WordsService} from '../../../services/words.service';
import { Adverb } from '../../wordModels/adverb.model';
import {ConfirmationModal} from '../../../modals/confirmation.modal'

@Component({
  selector: "adverb-form",
  templateUrl: "./adverbForm.component.html"
})
export class AdverbForm implements OnInit{
  adverbForm: FormGroup;
  adverb: Adverb

  constructor(public wordsService: WordsService, public dialog: MatDialog){};

  ngOnInit(){
    this.adverbForm = new FormGroup({
      'japanese': new FormControl(null, {validators: [Validators.required], }),
      'english': new FormControl(null, {validators: [Validators.required], }),
      'context': new FormControl(null, {validators: [Validators.required], }),
    })
  }

  saveAdverb(){
    const adverb: Adverb = {
      japanese: this.adverbForm.value.japanese,
      english: this.adverbForm.value.english,
      context: this.adverbForm.value.context,
    }

    if (this.adverbForm.valid){
      this.openDialog(adverb.japanese);
      this.wordsService.addAdverb(adverb);
      this.adverbForm.reset();
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
