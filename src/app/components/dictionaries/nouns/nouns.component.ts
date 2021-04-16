import {Component, OnInit} from '@angular/core'
import {WordsService} from '../../services/words.service';
import {Noun} from '../../newWord/wordModels/noun.model';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {DefinitionModal} from '../../modals/definition.modal';


@Component({
  selector:'nounsComponent',
  templateUrl:'./nouns.component.html',
  styleUrls:['./nouns.component.css']
})
export class NounsComponent implements OnInit{
  nouns: Noun[] = []
  private nounSub: Subscription;
  sortedNouns: {} = {};
  contexts: string[] = [];

  constructor(public wordsService: WordsService, public dialog: MatDialog){};

  ngOnInit(){
    this.wordsService.getNouns();
    this.nounSub = this.wordsService.getNounUpdateListener()
    .subscribe((nouns: Noun[]) => {
      this.nouns = nouns;
      this.getContexts();
      this.initializeContexts();
      this.sortWords();
      console.log(this.sortedNouns);
    })
  }

  getContexts(){
    for (let index = 0; index < this.nouns.length; index++)
    {
      let dupe = false;
      //If first context
      if (this.contexts.length == 0)
      {
        this.contexts.push(this.nouns[index]['context']);
      }
      else
      {
        //Check if duplicate
        for (let jndex = 0; jndex < this.contexts.length; jndex++)
        {
          if (this.contexts[jndex] == this.nouns[index]['context'])
          {
            //if dupe, break

            dupe = true;
            break;
          }
        }
        if (!dupe)
        {
          this.contexts.push(this.nouns[index]['context']);
        }

      }
    }
  }

  initializeContexts()
  {
    for (let i = 0; i < this.contexts.length; i++)
    {
      this.sortedNouns[this.contexts[i]] = [];
    }
  }

  sortWords(){
    //iterate through all the nouns in the list
    for (let index = 0 ; index < this.nouns.length; index ++)
    {
      //Check expression context and compare to contexts (loop)
      for (let j = 0; j < this.contexts.length; j ++)
      {
        if (this.nouns[index]['context'] == this.contexts[j])  //if they are the same
        {
          //add to the respective context dictionary list
          this.sortedNouns[this.contexts[j]].push(this.nouns[index]);
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
