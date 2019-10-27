import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

 quotes:Quote [] = [
   {id:1,name: 'The web of our life is of a mingled yarn, good and ill together',author: 'William Shakespear',},
   {id:2,name: 'It’s Not Whether You Get Knocked Down, It’s Whether You Get Up', author: 'Vince Lombardi'},
   {id:3,name: 'We May Encounter Many Defeats But We Must Not Be Defeated', author: 'Maya Angelou'},
   {id:4,name: 'Creativity Is Intelligence Having Fun', author: 'Albert Einstein'},
   {id:5,name: 'Today’s Accomplishments Were Yesterday’s Impossibilities',author: 'Robert H Schuller'}
  ];
  constructor() { }

  ngOnInit() {
  }

}
