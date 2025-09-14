import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { resolvePatientDetailsPageTitleResolver } from './resolve-patient-details-page-title-resolver';

describe('resolvePatientDetailsPageTitleResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => resolvePatientDetailsPageTitleResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
