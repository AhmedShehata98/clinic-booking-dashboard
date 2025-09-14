import { Route } from '@angular/router';
import { resolvePatientDetailsPageTitleResolver } from '../../resolvers/resolve-patient-details-page-title-resolver';

export const routes: Route[] = [
  {
    path: 'patients',
    loadComponent: () => import('../patients/patients').then((m) => m.Patients),
    title: 'Patient | Patient list',
  },
  {
    path: 'patients/:patientId',
    loadComponent: () =>
      import('../patients/patient-details/patient-details').then((m) => m.PatientDetails),
    title: resolvePatientDetailsPageTitleResolver,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('../patients/patient-appointments/patient-appointments').then(
            (m) => m.PatientAppointments
          ),
      },
      {
        path: 'transactions',
        loadComponent: () =>
          import('../patients/patient-transactions/patient-transactions').then(
            (m) => m.PatientTransactions
          ),
      },
    ],
  },
];
