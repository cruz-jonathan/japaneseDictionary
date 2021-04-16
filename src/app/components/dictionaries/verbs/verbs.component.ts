import {Component, OnInit} from '@angular/core'
import {WordsService} from '../../services/words.service'

import {Verb} from '../../newWord/wordModels/verb.model'
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {DefinitionModal} from '../../modals/definition.modal';

@Component({
  selector: 'verbsComponent',
  templateUrl:'./verbs.component.html',
  styleUrls: ['./verbs.component.css']
})
export class VerbsComponent implements OnInit{
  verbs: Verb[];
  private verbSub: Subscription;
  sortedVerbs: {} = {};

  constructor(public wordsService:WordsService, public dialog: MatDialog){};


  ngOnInit()
  {
    this.wordsService.getVerbs();
    this.verbSub = this.wordsService.getVerbsUpdateListener()
    .subscribe((verbs: Verb[]) => {
      this.verbs = verbs;
      this.initializeContexts();
      this.sortVerbs();
      console.log(this.sortedVerbs)
    })
  }

  initializeContexts()
  {
    this.sortedVerbs['U'] = [];
    this.sortedVerbs['RU'] = [];
    this.sortedVerbs['Irr'] = [];
  }

  sortVerbs()
  {
    for (let i = 0; i < this.verbs.length; i++)
    {
      if (this.verbs[i]['type'] == "U")
      {
        this.sortedVerbs['U'].push(this.verbs[i]);
      }
      else if (this.verbs[i]['type'] == "RU")
      {
        this.sortedVerbs['RU'].push(this.verbs[i]);
      }
      else if (this.verbs[i]['type'] == "Irr")
      {
        this.sortedVerbs['Irr'].push(this.verbs[i]);
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
