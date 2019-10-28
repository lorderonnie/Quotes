import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesTimeComponent } from './quotes-time/quotes-time.component';
import { HighlightDirective } from './highlight.directive';
import { DateCountPipe } from './date-count.pipe';
import { QuoteSectionComponent } from './quote-section/quote-section.component';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotesTimeComponent,
    HighlightDirective,
    DateCountPipe,
    QuoteSectionComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
