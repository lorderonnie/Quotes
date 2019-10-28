import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 quotes:Quote [] = [
   new Quote(1, 'The web of our life is of a mingled yarn, good and ill together', 'William Shakespear',new Date(1598,9,25)),
   new Quote(2, 'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up',  'Vince Lombardi',new Date(1964,10,5)),
   new Quote(3, 'We May Encounter Many Defeats But We Must Not Be Defeated',  'Maya Angelou',new Date(1972,12,18)),
   new Quote(4, 'Creativity Is Intelligence Having Fun', 'Albert Einstein',new Date(1896,4,2)),
   new Quote(5, 'Today’s Accomplishments Were Yesterday’s Impossibilities', 'Robert H Schuller',new Date(1988,7,30)),
  ];

  showDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`confirm to delete thy quote by the outstanding..... ${this.quotes[index].description}?`)

      if (toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  constructor() { }

  ngOnInit() {
  }

}
