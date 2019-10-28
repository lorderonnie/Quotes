import { Component, OnInit,EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-section',
  templateUrl: './quote-section.component.html',
  styleUrls: ['./quote-section.component.css']
})
export class QuoteSectionComponent implements OnInit {
  newQuote = new Quote(0,"","",new Date());
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
this.addQuote.emit(this.newQuote);
 this.newQuote = new Quote(0,"","",new Date());
  }
  constructor() { }

  ngOnInit() {
  }

}
