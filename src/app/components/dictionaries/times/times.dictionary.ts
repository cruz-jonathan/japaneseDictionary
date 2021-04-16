import {Component,  OnInit} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { WordsService } from '../../services/words.service';
import {Time} from '../../newWord/wordModels/time.model'
import { Subscription } from 'rxjs';
import {DefinitionModal} from '../../modals/definition.modal';

@Component({
  selector: 'timesDictionary',
  templateUrl: './times.dictionary.html',
  styleUrls: ['./times.dictionary.css']
})
export class TimesDictionary implements OnInit{
  times: Time[];
  sortedTimes: {} = {};
  contexts: string[] = [];
  private timesSub: Subscription;

  constructor(public wordsService: WordsService, public dialog: MatDialog) {};

  ngOnInit(){
    this.wordsService.getTimes();
    this.timesSub = this.wordsService.getTimeUpdateListener()
    .subscribe((times: Time[])=>{
      this.times = times;
      this.getContexts();
      this.initializeContexts();
      this.sortWords();
    })
  }

  getContexts(){
    for (let index = 0; index < this.times.length; index++)
    {
      let dupe = false
      if (this.contexts.length == 0)
      {
        this.contexts.push(this.times[index]['context']);
      }
      else {
        for (let j = 0; j < this.contexts.length; j++){
          if (this.contexts[j]== this.times[index]['context'])
          {
            dupe = true;
            break;
          }
        }
        if (!dupe)
        {
          this.contexts.push(this.times[index]['context'])
        }
      }
    }
  }

  initializeContexts(){
    for (let i = 0; i < this.contexts.length; i++)
    {
      this.sortedTimes[this.contexts[i]] = [];
    }
  }

  sortWords(){
    for (let i = 0; i < this.times.length; i++)
    {
      for (let j = 0; j< this.contexts.length; j++)
      {
        if (this.times[i]['context'] == this.contexts[j])
        {
          this.sortedTimes[this.contexts[j]].push(this.times[i]);
          break;
        }
      }
    }
  }

  openDialog(japanese: string, english: string)
  {
    const dialogRef = this.dialog.open(DefinitionModal, {
      width: '250px',
      data:{japanese, english}
    });
  }
}
