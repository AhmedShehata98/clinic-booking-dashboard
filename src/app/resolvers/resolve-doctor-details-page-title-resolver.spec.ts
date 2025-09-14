import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { resolveDoctorDetailsPageTitleResolver } from './resolve-doctor-details-page-title-resolver';

describe('resolveDoctorDetailsPageTitleResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => resolveDoctorDetailsPageTitleResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
