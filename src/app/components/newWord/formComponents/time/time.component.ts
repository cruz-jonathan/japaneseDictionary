import {Component, OnInit} from '@angular/core';
import {Validators, FormControl, FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {WordsService} from '../../../services/words.service';
import {Time} from '../../wordModels/time.model'
import {ConfirmationModal} from '../../../modals/confirmation.modal';

@Component ({
  selector: 'newTimeComponent',
  templateUrl: 'time.component.html'
})
export class NewTimeComponent implements OnInit{
  timeForm: FormGroup;
  time: Time;

  constructor(public wordsService: WordsService, public dialog: MatDialog){};

  ngOnInit(){
    this.timeForm = new FormGroup({
      'japanese': new FormControl(null, {validators: [Validators.required], }),
      'english': new FormControl(null, {validators: [Validators.required], }),
      'context': new FormControl(null, {validators: [Validators.required], }),
    })
  }

  saveTime(){
    const time: Time = {
      japanese: this.timeForm.value.japanese,
      english: this.timeForm.value.english,
      context: this.timeForm.value.context
    }
    if (this.timeForm.valid){
      this.openDialog(time.japanese);
      this.wordsService.addTime(time);
      this.timeForm.reset();
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
