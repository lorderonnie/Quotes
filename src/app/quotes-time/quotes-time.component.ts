import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quotes-time',
  templateUrl: './quotes-time.component.html',
  styleUrls: ['./quotes-time.component.css']
})
export class QuotesTimeComponent implements OnInit {
  @Input() quote: Quote;
  constructor() { }

  ngOnInit() {
  }

}
