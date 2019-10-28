import { Component, OnInit,EventEmitter, Output, Input } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-quote-section',
  templateUrl: './quote-section.component.html',
  styleUrls: ['./quote-section.component.css']
})
export class QuoteSectionComponent implements OnInit {
  @Input() quote=Quote
  newQuote = new Quote(0,"","",new Date(),0,0);
  @Output() addQuote = new EventEmitter<Quote>();

  submitQuote(){
this.addQuote.emit(this.newQuote);
 this.newQuote = new Quote(0,"","",new Date(),0,0);
  }
  constructor() { }

  ngOnInit() {
  }

}
