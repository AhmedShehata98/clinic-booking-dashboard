import { Route } from '@angular/router';

export const routes: Route[] = [
  {
    path: 'services',
    loadComponent: () => import('./services').then((mod) => mod.Services),
    title: 'Services | Services list',
  },
];
