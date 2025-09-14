import { ResolveFn } from '@angular/router';

export const resolvePatientDetailsPageTitleResolver: ResolveFn<string> = (route) => {
  const patientId = route.paramMap.get('patientId');

  return patientId || 'Patient details';
};
