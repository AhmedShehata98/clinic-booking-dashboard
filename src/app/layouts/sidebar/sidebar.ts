import {
  Component,
  computed,
  DestroyRef,
  inject,
  OnInit,
  PLATFORM_ID,
  signal,
} from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';

import { filter, map, switchMap } from 'rxjs';
import { NavigationLink } from '../../components/navigation-link/navigation-link';
import { LinkProps } from '../../components/navigation-link/navigation-link.model';

@Component({
  selector: 'app-sidebar',
  imports: [NavigationLink],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar implements OnInit {
  pathname = signal<string[]>([]);
  doctorId = signal<string | null>(null);
  patientId = signal<string | null>(null);
  locationId = signal<string | null>(null);
  appointmentId = signal<string | null>(null);
  serviceId = signal<string | null>(null);
  destroyRef = inject(DestroyRef);
  platformId = inject(PLATFORM_ID);
  router = inject(Router);
  activatedRoute = inject(ActivatedRoute);

  doctorsLinks = computed<{
    parent: LinkProps;
    children: LinkProps[];
  }>(() => ({
    parent: {
      id: '1',
      title: 'doctors',
      link: '/dashboard/doctors',
      isActive: this.pathname().includes('doctors'),
    },
    children: [
      {
        id: '1',
        title: 'Doctors',
        link: '/dashboard/doctors',
        isActive: this.pathname().includes('doctors') && !this.doctorId(),
      },
      {
        id: '1',
        title: 'Add doctor',
        link: '/dashboard/patients/new',
        isActive: this.pathname().includes('doctors') && this.pathname().includes('new'),
      },
      {
        id: '2',
        title: 'doctor details',
        link: '/dashboard/patients/:doctorId',
        isActive: Boolean(this.doctorId()),
      },
    ],
  }));
  patientsLinks = computed<{
    parent: LinkProps;
    children: LinkProps[];
  }>(() => ({
    parent: {
      id: '2',
      title: 'Patients',
      link: '/dashboard/patients',
      isActive: this.pathname().includes('patients'),
    },
    children: [
      {
        id: '1',
        title: 'Patients',
        link: '/dashboard/patients',
        isActive: this.pathname().includes('patients') && !this.patientId(),
      },
      {
        id: '1',
        title: 'Create Patients',
        link: '/dashboard/patients/new',
        isActive: this.pathname().includes('patients') && this.pathname().includes('new'),
      },
      {
        id: '2',
        title: 'new patients',
        link: '/dashboard/patients/:patients',
        isActive: Boolean(this.patientId()),
      },
    ],
  }));
  locationsLinks = computed<{
    parent: LinkProps;
    children: LinkProps[];
  }>(() => ({
    parent: {
      id: '2',
      title: 'Locations',
      link: '/dashboard/locations',
      isActive: this.pathname().includes('locations') && !this.locationId(),
    },
    children: [
      {
        id: '1',
        title: 'locations',
        link: '/dashboard/locations',
        isActive: this.pathname().includes('locations') && !this.locationId(),
      },
      { id: '1', title: 'Create location', link: '/dashboard/patients/new', isActive: false },
      {
        id: '2',
        title: 'location details',
        link: '/dashboard/locations/:locationId',
        isActive: Boolean(this.locationId()),
      },
    ],
  }));
  appointmentsLinks = computed<{
    parent: LinkProps;
    children: LinkProps[];
  }>(() => ({
    parent: {
      id: '4',
      title: 'appointments',
      link: '/dashboard/appointments',
      isActive: this.pathname().includes('appointments'),
    },
    children: [
      {
        id: '1',
        title: 'appointments',
        link: '/dashboard/appointments',
        isActive: this.pathname().includes('appointments') && !this.appointmentId(),
      },
      {
        id: '1',
        title: 'Create appointment',
        link: '/dashboard/appointments/new',
        isActive: this.pathname().includes('appointments') && this.pathname().includes('new'),
      },
      {
        id: '2',
        title: 'new appointments',
        link: '/dashboard/appointments/:appointmentsId',
        isActive: Boolean(this.appointmentId()),
      },
    ],
  }));
  servicesLinks = computed<{
    parent: LinkProps;
    children: LinkProps[];
  }>(() => ({
    parent: {
      id: '2',
      title: 'services',
      link: '/dashboard/services',
      isActive: this.pathname().includes('services'),
    },
    children: [
      {
        id: '1',
        title: 'services',
        link: '/dashboard/services',
        isActive: this.pathname().includes('services') && !this.serviceId(),
      },
      {
        id: '1',
        title: 'Create services',
        link: '/dashboard/services/new',
        isActive: this.pathname().includes('services') && this.pathname().includes('new'),
      },
      {
        id: '2',
        title: 'new service',
        link: '/dashboard/services/:servicesId',
        isActive: Boolean(this.serviceId()),
      },
    ],
  }));

  ngOnInit(): void {
    const subscription = this.router.events
      .pipe(
        filter((evt): evt is NavigationEnd => evt instanceof NavigationEnd),
        map((evt) => ({
          route: this.getDeepestChild(this.activatedRoute),
          url: evt.urlAfterRedirects.split('/'),
        })),
        switchMap(({ route, url }) => {
          return route.paramMap.pipe(
            map((params) => ({
              params,
              url,
            }))
          );
        })
      )
      .subscribe(({ params, url }) => {
        this.doctorId.set(params.get('doctorId'));
        this.patientId.set(params.get('patientId'));
        this.appointmentId.set(params.get('appointmentId'));
        this.locationId.set(params.get('locationId'));
        this.serviceId.set(params.get('serviceId'));
        this.pathname.set(url);
      });

    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
    });
  }
  private getDeepestChild(route: ActivatedRoute): ActivatedRoute {
    while (route.firstChild) {
      route = route.firstChild;
    }
    return route;
  }
}
