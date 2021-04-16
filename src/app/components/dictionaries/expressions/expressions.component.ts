import {Component, OnInit} from '@angular/core'
import {WordsService} from '../../services/words.service'
import {Expression} from '../../newWord/wordModels/expression.model'
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {DefinitionModal} from '../../modals/definition.modal'

@Component({
  selector: 'expressionComponent',
  templateUrl: './expressions.component.html',
  styleUrls: ['./expressions.component.css']
})

export class ExpressionsComponent implements OnInit{
  expressions: Expression[];
  private expressionSub: Subscription;
  contexts: {} = {};
  contextList: string[] = [];

  constructor(public wordsService: WordsService, public dialog: MatDialog){};

  ngOnInit(){
    this.wordsService.getExpressions(); //get expressions from the database
    this.expressionSub = this.wordsService.getExpressionUpdateListener()
    .subscribe((expressions: Expression[]) => {
      this.expressions = expressions;
      this.getContexts(); //get all contexts
      this.initializeContexts();  //initilize contexts to empty list
      this.sortWords(); //sort all the words
    })
  }

  getContexts(){
    for (let index = 0; index < this.expressions.length; index++)
    {
      let dupe = false;
      //If first context
      if (this.contextList.length == 0)
      {
        this.contextList.push(this.expressions[index]['context']);
      }
      else
      {
        //Check if duplicate
        for (let jndex = 0; jndex < this.contextList.length; jndex++)
        {
          if (this.contextList[jndex] == this.expressions[index]['context'])
          {
            //if dupe, break

            dupe = true;
            break;
          }
        }
        if (!dupe)
        {
          this.contextList.push(this.expressions[index]['context']);
        }

      }
    }
  }

  initializeContexts(){
    for (let i = 0; i < this.contextList.length; i++)
    {
      this.contexts[this.contextList[i]] = [];
    }
  }

  sortWords(){
    //iterate through all the expressions in the list
    for (let index = 0 ; index < this.expressions.length; index ++)
    {
      //Check expression context and compare to contexts (loop)
      for (let j = 0; j < this.contextList.length; j ++)
      {
        if (this.expressions[index]['context'] == this.contextList[j])  //if they are the same
        {
          //add to the respective context dictionary list
          this.contexts[this.contextList[j]].push(this.expressions[index]);
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
