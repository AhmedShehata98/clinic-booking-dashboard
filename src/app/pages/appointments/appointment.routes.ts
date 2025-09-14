import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'appointments',
    loadComponent: () => import('./appointments').then((m) => m.Appointments),
    title: 'appointments | Appointments list',
  },
];
