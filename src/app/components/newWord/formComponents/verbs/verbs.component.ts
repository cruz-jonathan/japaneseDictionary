import {Component, OnInit} from '@angular/core';
import {Validators, FormControl, FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {WordsService} from '../../../services/words.service';
import {Verb} from '../../wordModels/verb.model';
import {ConfirmationModal} from '../../../modals/confirmation.modal';

@Component ({
  selector: 'newVerbsComponent',
  templateUrl: 'verbs.component.html'
})
export class NewVerbsComponent implements OnInit{
  verbForm: FormGroup;
  verb: Verb

  constructor(public wordsService: WordsService, public dialog: MatDialog){};

  ngOnInit(){
    this.verbForm = new FormGroup({
      'japanese': new FormControl(null, {validators: [Validators.required], }),
      'english' : new FormControl(null, {validators: [Validators.required], }),
      'type': new FormControl(null, {validators: [Validators.required], }),
      'presentPositive': new FormControl(null, {validators: [Validators.required], }),
      'presentNegative': new FormControl(null, {validators: [Validators.required], }),
      'pastPositive': new FormControl(null, {validators: [Validators.required], }),
      'pastNegative': new FormControl(null, {validators: [Validators.required], }),
    })
  }

  saveVerb(){
    const verb: Verb = {
      japanese: this.verbForm.value.japanese,
      english: this.verbForm.value.english,
      type: this.verbForm.value.type,
      presentPositive: this.verbForm.value.presentPositive,
      presentNegative: this.verbForm.value.presentNegative,
      pastPositive: this.verbForm.value.pastPositive,
      pastNegative: this.verbForm.value.pastNegative
    }
    if (this.verbForm.valid)
    {
      this.openDialog(verb.japanese);
      this.wordsService.addVerb(verb);
      this.verbForm.reset();
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
