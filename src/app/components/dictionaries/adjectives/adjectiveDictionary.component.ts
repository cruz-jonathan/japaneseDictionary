import {Component, OnInit} from '@angular/core';
import {WordsService} from '../../services/words.service';
import {Adjective} from '../../newWord/wordModels/adjective.model';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import {DefinitionModal} from '../../modals/definition.modal';

@Component({
  selector: "adjective-dictionary",
  templateUrl: "./adjectiveDictionary.component.html",
  styleUrls: ["./adjectiveDictionary.component.css"]
})
export class AdjectiveDictionary implements OnInit{
  adjectives: Adjective[];
  adjectivesSub: Subscription;
  contexts: string[] = [];
  sortedAdjectives: {} = {};


  constructor(public wordsService: WordsService, public dialog: MatDialog){};

  ngOnInit(){
    this.wordsService.getAdjectives();
    this.adjectivesSub = this.wordsService.getAdjectiveUpdateListener()
    .subscribe((adjectives: Adjective[]) => {
      this.adjectives = adjectives;
      this.getContexts();
      this.initializeContexts();
      this.sortWords();
    })
  }

  getContexts(){
    for (let index = 0; index < this.adjectives.length; index++)
    {
      let dupe = false;
      //If first context
      if (this.contexts.length == 0)
      {
        this.contexts.push(this.adjectives[index]['context']);
      }
      else
      {
        //Check if duplicate
        for (let jndex = 0; jndex < this.contexts.length; jndex++)
        {
          if (this.contexts[jndex] == this.adjectives[index]['context'])
          {
            //if dupe, break

            dupe = true;
            break;
          }
        }
        if (!dupe)
        {
          this.contexts.push(this.adjectives[index]['context']);
        }

      }
    }
  }

  initializeContexts(){
    for (let i = 0; i < this.contexts.length; i++)
    {
      this.sortedAdjectives[this.contexts[i]] = [];
    }
  }

  sortWords(){
    //iterate through all the expressions in the list
    for (let index = 0 ; index < this.adjectives.length; index ++)
    {
      //Check expression context and compare to contexts (loop)
      for (let j = 0; j < this.contexts.length; j ++)
      {
        if (this.adjectives[index]['context'] == this.contexts[j])  //if they are the same
        {
          //add to the respective context dictionary list
          this.sortedAdjectives[this.contexts[j]].push(this.adjectives[index]);
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
