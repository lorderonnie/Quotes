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

  quoterelease(release:boolean){
    this.isRelease.emit(release);
  }
  constructor() { }

  ngOnInit() {
  }

}
