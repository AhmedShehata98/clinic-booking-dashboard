import { ResolveFn } from '@angular/router';

export const resolveDoctorDetailsPageTitleResolver: ResolveFn<string> = (route, state) => {
  const doctorId = route.paramMap.get('doctorId');

  return doctorId || 'Doctor details';
};
