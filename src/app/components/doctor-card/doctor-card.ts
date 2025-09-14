import { Component, Input } from '@angular/core';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { RouterLink } from '@angular/router';
import { IDoctorCard } from '../../models/doctors';

@Component({
  selector: 'app-doctor-card',
  imports: [CurrencyPipe, DatePipe, RouterLink],
  templateUrl: './doctor-card.html',
  styleUrl: './doctor-card.css',
})
export class DoctorCard {
  @Input() doctor!: IDoctorCard;
}
