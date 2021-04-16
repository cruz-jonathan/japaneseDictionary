import {Word} from '../newWord/wordModels/word.model'
import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import { Subject } from 'rxjs';

//Word Models
import { Colour } from '../newWord/wordModels/colour.model';
import { Expression } from '../newWord/wordModels/expression.model';
import { Noun } from '../newWord/wordModels/noun.model';
import { Verb } from '../newWord/wordModels/verb.model';
import { Time } from '../newWord/wordModels/time.model';
import { Adjective } from '../newWord/wordModels/adjective.model';
import { Adverb } from '../newWord/wordModels/adverb.model';



@Injectable({providedIn: 'root'})
export class WordsService{
  /*Adjectives*/
  private adjectives: Adjective[] = [];
  private adjectivesUpdated= new Subject<Adjective[]>();

  /*Adverbs*/
  private adverbs: Adverb[] = [];
  private adverbsUpdated = new Subject<Adverb[]>();


  /*Colors*/
  private colours: Colour[] = [];
  private coloursUpdated = new Subject<Colour[]>();

  /*Expressions*/
  private expressions: Expression[] = [];
  private expressionsUpdated = new Subject<Expression[]>();

  /*Nouns*/
  private nouns: Noun[] = [];
  private nounsUpdated = new Subject<Noun[]>();

  /*Times*/
  private times: Time[] = [];
  private timesUpdated = new Subject<Time[]>();

  /*Verbs*/
  private verbs: Verb[] = [];
  private verbsUpdated = new Subject<Verb[]>();



  constructor(private http: HttpClient){}

  /*~~~~~~ADJECTIVES~~~~~~~*/
  addAdjective(adjective: Adjective){
    this.http.post<{message: String, adjective: Adjective}>('http://localhost:3000/word/adjectives', adjective)
    .subscribe(data => {
      console.log(data.message);
    })
  }

  getAdjectives(){
    this.http.get<{message: String, adjectiveWords: Adjective[]}>('http://localhost:3000/word/adjectives')
    .subscribe(data=> {
      console.log(data.message);
      this.adjectives = data.adjectiveWords;
      this.adjectivesUpdated.next([...this.adjectives]);
    })
  }

  getAdjectiveUpdateListener(){
    return this.adjectivesUpdated.asObservable();
  }


  /*~~~~~~~ADVERBS~~~~~~~~~*/
  addAdverb(adverb: Adverb){
    this.http.post<{message: String, adverb: Adverb}>('http://localhost:3000/word/adverbs', adverb)
    .subscribe(data=> {
      console.log(data.message);
    })
  }

  getAdverbs() {
    this.http.get<{message: String, adverbWords: Adverb[]}>('http://localhost:3000/word/adverbs')
    .subscribe(data => {
      console.log(data.message);
      this.adverbs = data.adverbWords;
      this.adverbsUpdated.next([...this.adverbs]);
    })
  }

  getAdverbsUpdateListener()
  {
    return this.adverbsUpdated.asObservable();
  }



  /*~~~~~~~COLOURS~~~~~~~*/
  addColour(colour: Colour){
    this.http.post<{message: String, colour: Colour}>('http://localhost:3000/word/colours', colour)
    .subscribe((data) => {
      console.log(data.message);
    })
  }

  getColours(){
    this.http.get<{message: String, colourWords: Colour[]}>('http://localhost:3000/word/colours')
    .subscribe((data) => {
      console.log(data.message);
      this.colours = data.colourWords;
      this.coloursUpdated.next([...this.colours]);
    })
  }

  getColourUpdateListener(){
    return this.coloursUpdated.asObservable();
  }


  /*~~~~~~EXPRESSIONS~~~~~~~*/
  addExpression(expression: Expression)
  {
    this.http.post<{message: String, expression: Expression}>('http://localhost:3000/word/expressions', expression)
    .subscribe((data) => {
      console.log(data.message);
    })
  }

  getExpressions() {
    this.http.get<{message: String, expressionWords: Expression[]}>('http://localhost:3000/word/expressions')
    .subscribe((data) => {
      console.log(data.message);
      this.expressions = data.expressionWords;
      this.expressionsUpdated.next([...this.expressions]);
    })
  }

  getExpressionUpdateListener(){
    return this.expressionsUpdated.asObservable();    //watch for any changes to the expressions list
  }

  /*~~~~~~NOUNS~~~~~~*/
  addNoun(noun: Noun) {
    this.http.post<{message: String, noun: Noun}>('http://localhost:3000/word/nouns', noun)
    .subscribe((data)=>{
      console.log(data.message);
    })
  }

  getNouns(){
    this.http.get<{message:String, nounWords: Noun[]}>('http://localhost:3000/word/nouns')
    .subscribe((data)=>{
      console.log(data.message);
      this.nouns = data.nounWords;
      this.nounsUpdated.next([...this.nouns]);
    })
  }

  getNounUpdateListener(){
    return this.nounsUpdated.asObservable();
  }

  /*~~~~~~TIME~~~~~~*/
  addTime(time: Time){
    this.http.post<{message:String, time: Time}>('http://localhost:3000/word/times', time)
    .subscribe((data)=> {
      console.log(data.message);
    })
  }

  getTimes(){
    this.http.get<{message:String, timeWords: Time[]}>('http://localhost:3000/word/times')
    .subscribe((data)=>{
      console.log(data.message);
      this.times = data.timeWords;
      this.timesUpdated.next([...this.times]);
    })
  }

  getTimeUpdateListener(){
    return this.timesUpdated.asObservable();
  }

  /*~~~~~~~VERBS~~~~~~~*/
  addVerb(verb: Verb) {
    this.http.post<{message:String, verb: Verb}>('http://localhost:3000/word/verbs', verb)
    .subscribe((data)=>{
      console.log(data.message);
    })
  }

  getVerbs(){
    this.http.get<{message:String, verbWords: Verb[]}>('http://localhost:3000/word/verbs')
    .subscribe((data) => {
      console.log(data.message);
      this.verbs= data.verbWords;
      this.verbsUpdated.next([...this.verbs]);
    })
  }

  getVerbsUpdateListener(){
    return this.verbsUpdated.asObservable();
  }


}

/* BASIC ADD WORD
addWord(word: Word){

  this.http.post<{message: String, word: Word}>('http://localhost:3000/word', word)
  .subscribe((data)=> {
    console.log(data.message);
  })
}
*/
