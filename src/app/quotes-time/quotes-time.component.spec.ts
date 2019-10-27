import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuotesTimeComponent } from './quotes-time.component';

describe('QuotesTimeComponent', () => {
  let component: QuotesTimeComponent;
  let fixture: ComponentFixture<QuotesTimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuotesTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuotesTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
