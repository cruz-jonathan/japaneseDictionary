import {Component, OnInit} from '@angular/core'
import {Validators, FormControl, FormGroup} from '@angular/forms'
import {WordsService} from '../services/words.service'

@Component({
  selector:'new-word-component',
  templateUrl: './newWord.component.html',
  styleUrls: ['./newWord.component.css']
})
export class NewWordComponent implements OnInit{
  form: FormGroup;

  constructor(public wordsService: WordsService){}

  ngOnInit(){
    this.form = new FormGroup ({
      'context': new FormControl(null, {validators: [Validators.required]})
    });
  }

}
