import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientTransactions } from './patient-transactions';

describe('PatientTransactions', () => {
  let component: PatientTransactions;
  let fixture: ComponentFixture<PatientTransactions>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PatientTransactions]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientTransactions);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
