import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-patient-details',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './patient-details.html',
  styleUrl: './patient-details.css',
  host: {
    class: 'dashboard-section',
  },
})
export class PatientDetails {
  activatedRoute = inject(ActivatedRoute);
  patientId = signal<string | null>(null);

  constructor() {
    this.activatedRoute.paramMap.subscribe((qp) => this.patientId.set(qp.get('patientId')));
  }
}
