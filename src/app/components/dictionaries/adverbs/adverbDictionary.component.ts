import {Component, OnInit} from '@angular/core';
import {WordsService} from '../../services/words.service';
import {Adverb} from '../../newWord/wordModels/adverb.model';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {DefinitionModal} from '../../modals/definition.modal';


@Component({
  selector: "adverb-dictionary",
  templateUrl: "./adverbDictionary.component.html",
  styleUrls: ["./adverbDictionary.component.css"]
})
export class AdverbDictionary implements OnInit{
  adverbs: Adverb[];
  private adverbsSub: Subscription;
  sortedAdverbs: {} ={};
  contexts: string[] = [];

  constructor(public wordsService: WordsService, public dialog: MatDialog){};

  ngOnInit(){
    this.wordsService.getAdverbs();
    this.adverbsSub = this.wordsService.getAdverbsUpdateListener()
    .subscribe((adverbs: Adverb[])=> {
      this.adverbs = adverbs;
      this.getContexts();
      this.initializeContexts();
      this.sortWords();
      console.log(this.sortedAdverbs);
    })
  }
  getContexts(){
    for (let index = 0; index < this.adverbs.length; index++)
    {
      let dupe = false;
      //If first context
      if (this.contexts.length == 0)
      {
        this.contexts.push(this.adverbs[index]['context']);
      }
      else
      {
        //Check if duplicate
        for (let jndex = 0; jndex < this.contexts.length; jndex++)
        {
          if (this.contexts[jndex] == this.adverbs[index]['context'])
          {
            //if dupe, break

            dupe = true;
            break;
          }
        }
        if (!dupe)
        {
          this.contexts.push(this.adverbs[index]['context']);
        }

      }
    }
  }

  initializeContexts(){
    for (let i = 0; i < this.contexts.length; i++)
    {
      this.sortedAdverbs[this.contexts[i]] = [];
    }
  }

  sortWords(){
    //iterate through all the expressions in the list
    for (let index = 0 ; index < this.adverbs.length; index ++)
    {
      //Check expression context and compare to contexts (loop)
      for (let j = 0; j < this.contexts.length; j ++)
      {
        if (this.adverbs[index]['context'] == this.contexts[j])  //if they are the same
        {
          //add to the respective context dictionary list
          this.sortedAdverbs[this.contexts[j]].push(this.adverbs[index]);
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
