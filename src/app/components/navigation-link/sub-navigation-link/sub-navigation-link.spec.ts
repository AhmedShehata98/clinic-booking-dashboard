import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubNavigationLink } from './sub-navigation-link';

describe('SubNavigationLink', () => {
  let component: SubNavigationLink;
  let fixture: ComponentFixture<SubNavigationLink>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubNavigationLink]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubNavigationLink);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
