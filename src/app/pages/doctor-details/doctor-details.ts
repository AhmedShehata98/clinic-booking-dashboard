import { CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit, signal, DestroyRef } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-doctor-details',
  imports: [CurrencyPipe, RouterLink],
  templateUrl: './doctor-details.html',
  styleUrl: './doctor-details.css',
  host: {
    class: 'dashboard-section',
  },
})
export class DoctorDetails implements OnInit {
  activatedRoute = inject(ActivatedRoute);
  doctorId = signal<string | null>(null);
  destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    const subscription = this.activatedRoute.paramMap.subscribe((param) =>
      this.doctorId.set(param.get('doctorId'))
    );
    this.destroyRef.onDestroy(() => {
      subscription.unsubscribe();
      this.doctorId.set(null);
    });
  }
}
