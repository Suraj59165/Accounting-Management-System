import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTableComponent } from './invoice-table.component';

describe('ItemTableComponent', () => {
  let component: InvoiceTableComponent;
  let fixture: ComponentFixture<InvoiceTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ InvoiceTableComponent]
    });
    fixture = TestBed.createComponent( InvoiceTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
