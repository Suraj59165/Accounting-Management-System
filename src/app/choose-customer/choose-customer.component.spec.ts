import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseCustomerComponent } from './choose-customer.component';

describe('ChooseCustomerComponent', () => {
  let component: ChooseCustomerComponent;
  let fixture: ComponentFixture<ChooseCustomerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChooseCustomerComponent]
    });
    fixture = TestBed.createComponent(ChooseCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
