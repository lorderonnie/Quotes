import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteComponent } from './quote/quote.component';
import { QuotesTimeComponent } from './quotes-time/quotes-time.component';
import { HighlightDirective } from './highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    QuoteComponent,
    QuotesTimeComponent,
    HighlightDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
