import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-time',
  templateUrl: './quotes-time.component.html',
  styleUrls: ['./quotes-time.component.css']
})
export class QuotesTimeComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isRelease = new EventEmitter<boolean>();
  
  quoteRelease(release:boolean){
    this.isRelease.emit(release);
  }
@Output() islikeQuote = new EventEmitter<boolean>();
@Output() isdislikeQuote = new EventEmitter<boolean>();

likeQuote(okayVote:boolean){
  this.islikeQuote.emit(okayVote)
};
dislikeQuote(noVote:boolean){
  this.isdislikeQuote.emit(noVote)
};
  constructor() { }

  ngOnInit() {
  }

}
