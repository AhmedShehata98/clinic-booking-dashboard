import { DatePipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-appointments',
  imports: [DatePipe],
  templateUrl: './appointments.html',
  styleUrl: './appointments.css',
  host: {
    class: 'dashboard-section',
  },
})
export class Appointments {
  isShownAppointments = signal(false);
  appointments = [
    {
      id: '1',
      dateTime: '2025-04-30T09:30',
      doctorName: 'Dr. Mick Thompson',
      specialization: 'Cardiologist',
      mode: 'In-person',
      status: 'Checked Out',
      image: 'https://randomuser.me/api/portraits/men/32.jpg',
    },
    {
      id: '2',
      dateTime: '2025-04-15T11:20',
      doctorName: 'Dr. Sarah Johnson',
      specialization: 'Orthopedic Surgeon',
      mode: 'Online',
      status: 'Checked in',
      image: 'https://randomuser.me/api/portraits/women/45.jpg',
    },
    {
      id: '3',
      dateTime: '2025-04-02T08:15',
      doctorName: 'Dr. Emily Carter',
      specialization: 'Pediatrician',
      mode: 'In-person',
      status: 'Cancelled',
      image: 'https://randomuser.me/api/portraits/women/33.jpg',
    },
    {
      id: '4',
      dateTime: '2025-03-27T14:00',
      doctorName: 'Dr. David Lee',
      specialization: 'Gynecologist',
      mode: 'Online',
      status: 'Schedule',
      image: 'https://randomuser.me/api/portraits/men/41.jpg',
    },
    {
      id: '5',
      dateTime: '2025-03-12T17:40',
      doctorName: 'Dr. Anna Kim',
      specialization: 'Psychiatrist',
      mode: 'Online',
      status: 'Confirmed',
      image: 'https://randomuser.me/api/portraits/women/56.jpg',
    },
    {
      id: '6',
      dateTime: '2025-03-05T11:15',
      doctorName: 'Dr. John Smith',
      specialization: 'Neurosurgeon',
      mode: 'Online',
      status: 'Confirmed',
      image: 'https://randomuser.me/api/portraits/men/28.jpg',
    },
    {
      id: '7',
      dateTime: '2025-02-24T09:20',
      doctorName: 'Dr. Lisa White',
      specialization: 'Oncologist',
      mode: 'In-person',
      status: 'Cancelled',
      image: 'https://randomuser.me/api/portraits/women/21.jpg',
    },
    {
      id: '8',
      dateTime: '2025-02-16T11:40',
      doctorName: 'Dr. Patricia Brown',
      specialization: 'Pulmonologist',
      mode: 'Online',
      status: 'Confirmed',
      image: 'https://randomuser.me/api/portraits/women/48.jpg',
    },
    {
      id: '9',
      dateTime: '2025-02-01T16:00',
      doctorName: 'Dr. Rachel Green',
      specialization: 'Urologist',
      mode: 'Online',
      status: 'Checked Out',
      image: 'https://randomuser.me/api/portraits/women/39.jpg',
    },
    {
      id: '10',
      dateTime: '2025-01-25T15:10',
      doctorName: 'Dr. Michael Smith',
      specialization: 'Cardiologist',
      mode: 'Online',
      status: 'Schedule',
      image: 'https://randomuser.me/api/portraits/men/19.jpg',
    },
  ];
}
