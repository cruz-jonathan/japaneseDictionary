import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { IndexComponent } from './components/index/index.component';
import { NewWordComponent } from './components/newWord/newWord.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { HttpClientModule } from '@angular/common/http';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatDialogModule} from '@angular/material/dialog';


/* Dictionary Form Components */
import { AdjectiveDictionary } from './components/dictionaries/adjectives/adjectiveDictionary.component';
import { AdverbDictionary } from './components/dictionaries/adverbs/adverbDictionary.component';
import { ColorsComponent } from './components/dictionaries/colours/colours.component';
import { ExpressionsComponent } from './components/dictionaries/expressions/expressions.component';
import { NounsComponent } from './components/dictionaries/nouns/nouns.component';
import { NumbersComponent } from './components/dictionaries/numbers/numbers.component';
import {TimesDictionary} from './components/dictionaries/times/times.dictionary'
import { VerbsComponent } from './components/dictionaries/verbs/verbs.component';


/* Word Form Components*/
import { NewColoursComponent } from './components/newWord/formComponents/colours/colours.component';
import { NewExpressionsComponent } from './components/newWord/formComponents/expressions/expressions.component';
import { NewNounsComponent } from './components/newWord/formComponents/nouns/nouns.component';
import { NewTimeComponent } from './components/newWord/formComponents/time/time.component';
import { NewVerbsComponent } from './components/newWord/formComponents/verbs/verbs.component';
import { AdverbForm } from './components/newWord/formComponents/adverbs/adverbForm.component';
import { AdjectiveForm } from './components/newWord/formComponents/adjectives/adjectiveForm.component';
import { NewWordModal } from './components/modals/newWord.modal';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IndexComponent,
    NewWordComponent,
    ColorsComponent,
    ExpressionsComponent,
    NounsComponent,
    NumbersComponent,
    VerbsComponent,
    NewColoursComponent,
    NewExpressionsComponent,
    NewNounsComponent,
    NewTimeComponent,
    NewVerbsComponent,
    TimesDictionary,
    AdverbForm,
    AdjectiveForm,
    AdjectiveDictionary,
    AdverbDictionary,
    NewWordModal,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    ReactiveFormsModule,
    MatSelectModule,
    HttpClientModule,
    MatGridListModule,
    MatListModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
