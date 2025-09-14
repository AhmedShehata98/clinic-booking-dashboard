import { Component, signal } from '@angular/core';
import { Modal } from '../../components/modal/modal';
import { NewDoctor } from '../new-doctor/new-doctor';
import { CurrencyPipe, DatePipe } from '@angular/common';
import { DoctorCard } from '../../components/doctor-card/doctor-card';
import { nanoid } from 'nanoid';
import { IDoctorCard } from '../../models/doctors';

@Component({
  selector: 'app-doctors',
  imports: [Modal, NewDoctor, DoctorCard],
  templateUrl: './doctors.html',
  styleUrl: './doctors.css',
  host: {
    class: 'dashboard-section',
  },
})
export class Doctors {
  isShownDoctorModal = signal(false);
  doctors: IDoctorCard[] = [
    {
      id: nanoid(),
      img: 'doctors/doc-01.jpeg',
      name: 'Dr. Ahmed Al-Farouqi',
      specialty: 'Cardiology',
      availableDate: new Date('2025-09-12'),
      salary: '15000',
    },
    {
      id: nanoid(),
      img: 'doctors/doc-02.jpeg',
      name: 'Dr. Khalid Al-Mansouri',
      specialty: 'Neurology',
      availableDate: new Date('2025-09-15'),
      salary: '17000',
    },
    {
      id: nanoid(),
      img: 'doctors/doc-03.jpeg',
      name: 'Dr. Omar Al-Hadidi',
      specialty: 'Orthopedic Surgery',
      availableDate: new Date('2025-09-20'),
      salary: '16000',
    },
    {
      id: nanoid(),
      img: 'doctors/doc-01.jpeg',
      name: 'Dr. Hassan Al-Karim',
      specialty: 'Dermatology',
      availableDate: new Date('2025-09-25'),
      salary: '12000',
    },
    {
      id: nanoid(),
      img: 'doctors/doc-02.jpeg',
      name: 'Dr. Mahmoud Al-Saleh',
      specialty: 'Pediatrics',
      availableDate: new Date('2025-09-14'),
      salary: '11000',
    },
    {
      id: nanoid(),
      img: 'doctors/doc-03.jpeg',
      name: 'Dr. Tariq Al-Najjar',
      specialty: 'General Surgery',
      availableDate: new Date('2025-09-22'),
      salary: '15500',
    },
    {
      id: nanoid(),
      img: 'doctors/doc-01.jpeg',
      name: 'Dr. Youssef Al-Zahrani',
      specialty: 'Internal Medicine',
      availableDate: new Date('2025-09-18'),
      salary: '14500',
    },
    {
      id: nanoid(),
      img: 'doctors/doc-02.jpeg',
      name: 'Dr. Samir Al-Hakim',
      specialty: 'Ophthalmology',
      availableDate: new Date('2025-09-27'),
      salary: '13500',
    },
    {
      id: nanoid(),
      img: 'doctors/doc-02.jpeg',
      name: 'Dr. Nabil Al-Rashid',
      specialty: 'Psychiatry',
      availableDate: new Date('2025-09-30'),
      salary: '14000',
    },
    {
      id: nanoid(),
      img: 'doctors/doc-03.jpeg',
      name: 'Dr. Fadi Al-Jabari',
      specialty: 'Endocrinology',
      availableDate: new Date('2025-09-13'),
      salary: '15500',
    },
    {
      id: nanoid(),
      img: 'doctors/doc-03.jpeg',
      name: 'Dr. Adel Al-Khalifa',
      specialty: 'Pulmonology',
      availableDate: new Date('2025-09-19'),
      salary: '15000',
    },
    {
      id: nanoid(),
      img: 'doctors/doc-02.jpeg',
      name: 'Dr. Bassam Al-Ahmadi',
      specialty: 'Gastroenterology',
      availableDate: new Date('2025-09-23'),
      salary: '16000',
    },
  ];
}
