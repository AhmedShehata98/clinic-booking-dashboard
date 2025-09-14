import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmResetPassword } from './confirm-reset-password';

describe('ConfirmResetPassword', () => {
  let component: ConfirmResetPassword;
  let fixture: ComponentFixture<ConfirmResetPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmResetPassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmResetPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
