import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmForgetPassword } from './confirm-forget-password';

describe('ConfirmForgetPassword', () => {
  let component: ConfirmForgetPassword;
  let fixture: ComponentFixture<ConfirmForgetPassword>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfirmForgetPassword]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConfirmForgetPassword);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
