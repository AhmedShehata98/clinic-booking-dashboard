import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLocation } from './new-location';

describe('NewLocation', () => {
  let component: NewLocation;
  let fixture: ComponentFixture<NewLocation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewLocation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLocation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
