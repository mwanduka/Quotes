import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { HighlightDirective } from './highlight.directive';
import { QuoteComponent } from './quote/quote.component';
import { QuoteDetailsComponent } from './quote-details/quote-details.component';
import { QuoteFormComponent } from './quote-form/quote-form.component';
import { DateCountPipe } from './date-count.pipe';
import { QuoteVoteComponent } from './quote-vote/quote-vote.component';
@NgModule({
  declarations: [
    AppComponent,
    HighlightDirective,
    QuoteComponent,
    QuoteDetailsComponent,
    QuoteFormComponent,
    DateCountPipe,
    QuoteVoteComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
