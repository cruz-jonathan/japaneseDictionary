import {NgModule} from '@angular/core'
import {RouterModule, Routes} from '@angular/router'
import { AdjectiveDictionary } from './components/dictionaries/adjectives/adjectiveDictionary.component'
import { AdverbDictionary } from './components/dictionaries/adverbs/adverbDictionary.component'
import { ColorsComponent } from './components/dictionaries/colours/colours.component'
import { ExpressionsComponent } from './components/dictionaries/expressions/expressions.component'
import { NounsComponent } from './components/dictionaries/nouns/nouns.component'
import { NumbersComponent } from './components/dictionaries/numbers/numbers.component'
import { TimesDictionary } from './components/dictionaries/times/times.dictionary'
import { VerbsComponent } from './components/dictionaries/verbs/verbs.component'
import { IndexComponent } from './components/index/index.component'
import { NewWordComponent } from './components/newWord/newWord.component'

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path: 'new', component: NewWordComponent},
  {path: 'adjectives', component: AdjectiveDictionary},
  {path: 'adverbs', component: AdverbDictionary},
  {path: 'colours', component: ColorsComponent},
  {path: 'expressions', component: ExpressionsComponent},
  {path: 'nouns', component: NounsComponent},
  {path: 'numbers', component: NumbersComponent},
  {path: 'verbs', component: VerbsComponent},
  {path: 'times', component: TimesDictionary}

]

@NgModule({
 imports:[RouterModule.forRoot(routes)],
 exports:[RouterModule]
})
export class AppRoutingModule{

}
