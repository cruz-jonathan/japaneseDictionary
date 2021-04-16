import {Component, OnInit} from '@angular/core';
import {Validators, FormControl, FormGroup} from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import {WordsService} from '../../../services/words.service';
import {Expression} from '../../wordModels/expression.model';
import {ConfirmationModal} from '../../../modals/confirmation.modal';

@Component ({
  selector: 'newExpressionsComponent',
  templateUrl: 'expressions.component.html'
})
export class NewExpressionsComponent implements OnInit{
  expressionForm: FormGroup;
  expression: Expression;

  constructor (public wordsService: WordsService, public dialog: MatDialog){};

  ngOnInit(){
    this.expressionForm = new FormGroup({
      'japanese': new FormControl(null, {validators: [Validators.required], }),
      'english': new FormControl(null, {validators: [Validators.required], }),
      'context': new FormControl(null, {validators: [Validators.required], }),
    })
  }

  saveExpression(){
    const expression: Expression={
      japanese: this.expressionForm.value.japanese,
      english: this.expressionForm.value.english,
      context: this.expressionForm.value.context
    }
    if (this.expressionForm.valid){
      this.openDialog(expression.japanese);
      this.wordsService.addExpression(expression);
      this.expressionForm.reset();
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
