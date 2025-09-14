import { Component, signal } from '@angular/core';
import { Modal } from '../../components/modal/modal';
import { PatientType } from '../../components/patient-card/patient.model';
import { PatientCard } from '../../components/patient-card/patient-card';
import { NewPatient } from '../patients/new-patient/new-patient';

@Component({
  selector: 'app-patients',
  imports: [Modal, PatientCard, NewPatient],
  templateUrl: './patients.html',
  styleUrl: './patients.css',
  host: {
    class: 'dashboard-section',
  },
})
export class Patients {
  isShownDoctorModal = signal(false);
  patientsData: PatientType[] = [
    {
      id: '1',
      img: 'https://randomuser.me/api/portraits/men/12.jpg',
      name: 'Omar Khaled',
      gender: 'Male',
      age: '32',
      location: 'Cairo, Egypt',
      lastAppointment: '2025-08-21',
    },
    {
      id: '2',
      img: 'https://randomuser.me/api/portraits/women/45.jpg',
      name: 'Sarah Ahmed',
      gender: 'Female',
      age: '28',
      location: 'Alexandria, Egypt',
      lastAppointment: '2025-07-30',
    },
    {
      id: '3',
      img: 'https://randomuser.me/api/portraits/men/67.jpg',
      name: 'Mohamed Samir',
      gender: 'Male',
      age: '41',
      location: 'Giza, Egypt',
      lastAppointment: '2025-09-01',
    },
    {
      id: '4',
      img: 'https://randomuser.me/api/portraits/women/33.jpg',
      name: 'Layla Hassan',
      gender: 'Female',
      age: '35',
      location: 'Dubai, UAE',
      lastAppointment: '2025-08-15',
    },
    {
      id: '5',
      img: 'https://randomuser.me/api/portraits/men/84.jpg',
      name: 'Ahmed Mostafa',
      gender: 'Male',
      age: '29',
      location: 'Doha, Qatar',
      lastAppointment: '2025-09-05',
    },
    {
      id: '6',
      img: 'https://randomuser.me/api/portraits/women/22.jpg',
      name: 'Mariam Youssef',
      gender: 'Female',
      age: '46',
      location: 'Cairo, Egypt',
      lastAppointment: '2025-06-12',
    },
    {
      id: '7',
      img: 'https://randomuser.me/api/portraits/men/9.jpg',
      name: 'Youssef Ali',
      gender: 'Male',
      age: '53',
      location: 'Riyadh, Saudi Arabia',
      lastAppointment: '2025-08-27',
    },
    {
      id: '8',
      img: 'https://randomuser.me/api/portraits/women/60.jpg',
      name: 'Hana Ibrahim',
      gender: 'Female',
      age: '24',
      location: 'Amman, Jordan',
      lastAppointment: '2025-07-19',
    },
    {
      id: '9',
      img: 'https://randomuser.me/api/portraits/men/14.jpg',
      name: 'Karim Fathy',
      gender: 'Male',
      age: '37',
      location: 'Muscat, Oman',
      lastAppointment: '2025-09-08',
    },
    {
      id: '10',
      img: 'https://randomuser.me/api/portraits/women/11.jpg',
      name: 'Nour El-Sayed',
      gender: 'Female',
      age: '30',
      location: 'Beirut, Lebanon',
      lastAppointment: '2025-08-05',
    },
    {
      id: '11',
      img: 'https://randomuser.me/api/portraits/men/50.jpg',
      name: 'Hassan Adel',
      gender: 'Male',
      age: '26',
      location: 'Cairo, Egypt',
      lastAppointment: '2025-07-25',
    },
    {
      id: '12',
      img: 'https://randomuser.me/api/portraits/women/77.jpg',
      name: 'Farah Nabil',
      gender: 'Female',
      age: '39',
      location: 'Kuwait City, Kuwait',
      lastAppointment: '2025-09-02',
    },
  ];
}
