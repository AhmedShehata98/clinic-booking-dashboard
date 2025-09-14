import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PatientType } from './patient.model';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-patient-card',
  imports: [RouterLink, DatePipe],
  templateUrl: './patient-card.html',
  styleUrl: './patient-card.css',
})
export class PatientCard {
  @Input() patient!: PatientType;
}
