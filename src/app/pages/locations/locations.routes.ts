import { Route } from '@angular/router';

export const locations: Route[] = [
  {
    path: 'locations',
    loadComponent: () => import('./locations').then((m) => m.Locations),
    title: 'Locations | Locations list',
    children: [
      {
        path: 'new',
        loadComponent: () => import('./new-location/new-location').then((m) => m.NewLocation),
      },
    ],
  },
];
