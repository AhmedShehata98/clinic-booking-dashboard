import { Routes } from '@angular/router';
import { routes as doctorsRoutes } from './pages/doctors/doctors.routes';
import { routes as patientRoutes } from './pages/patients/patients.routes';
import { Overview } from './pages/overview/overview';
import { NotFound } from './pages/not-found/not-found';
import { DashboardLayout } from './layouts/dashboard-layout/dashboard-layout';
import { locations as locationsRoutes } from './pages/locations/locations.routes';
import { routes as authRoutes } from './pages/auth/auth.routes';
import { routes as appointmentsRoutes } from './pages/appointments/appointment.routes';
import { routes as servicesRoutes } from './pages/services/services.routes';

export const routes: Routes = [
  ...authRoutes,
  {
    path: 'dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        component: Overview,
        title: 'Dashboard | Clinic Overview',
      },
      ...doctorsRoutes,
      ...patientRoutes,
      ...locationsRoutes,
      ...appointmentsRoutes,
      ...servicesRoutes,
      {
        path: '**',
        component: NotFound,
      },
    ],
  },
  {
    path: '**',
    component: NotFound,
  },
];
