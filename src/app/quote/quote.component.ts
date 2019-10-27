import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 quotes:Quote [] = [
   new Quote(1, 'The web of our life is of a mingled yarn, good and ill together', 'William Shakespear'),
   new Quote(2, 'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up',  'Vince Lombardi'),
   new Quote(3, 'We May Encounter Many Defeats But We Must Not Be Defeated',  'Maya Angelou'),
   new Quote(4, 'Creativity Is Intelligence Having Fun', 'Albert Einstein'),
   new Quote(5, 'Today’s Accomplishments Were Yesterday’s Impossibilities', 'Robert H Schuller'),
  ];

  showDetails(index: number){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  releaseQuote({ isRelease, index }: { isRelease: any; index: number; }){
    if (isRelease) {
      this.quotes.splice(index,1);
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
