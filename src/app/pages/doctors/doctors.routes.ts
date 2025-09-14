import { Route } from '@angular/router';
import { resolveDoctorDetailsPageTitleResolver } from '../../resolvers/resolve-doctor-details-page-title-resolver';

export const routes: Route[] = [
  {
    path: 'doctors',
    loadComponent: () => import('../../pages/doctors/doctors').then((m) => m.Doctors),
    title: 'Doctors | Doctors List',
  },
  {
    path: 'doctors/:doctorId',
    loadComponent: () =>
      import('../../pages/doctor-details/doctor-details').then((m) => m.DoctorDetails),
    title: resolveDoctorDetailsPageTitleResolver,
  },
];
