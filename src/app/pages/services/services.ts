import { CurrencyPipe } from '@angular/common';
import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [CurrencyPipe],
  templateUrl: './services.html',
  styleUrl: './services.css',
  host: {
    class: 'dashboard-section',
  },
})
export class Services {
  isShownServiceModal = signal(false);
  services = [
    {
      id: 'srv_1',
      serviceName: 'General Consultation',
      department: 'General Medicine',
      price: 200,
      status: 'Active',
    },
    {
      id: 'srv_2',
      serviceName: 'Dental Cleaning',
      department: 'Dentistry',
      price: 180,
      status: 'Active',
    },
    {
      id: 'srv_3',
      serviceName: 'Eye Checkup',
      department: 'Ophthalmology',
      price: 150,
      status: 'Active',
    },
    {
      id: 'srv_4',
      serviceName: 'X-Ray',
      department: 'Radiology',
      price: 80,
      status: 'Inactive',
    },
    {
      id: 'srv_5',
      serviceName: 'Physiotherapy Session',
      department: 'Physiotherapy',
      price: 130,
      status: 'Active',
    },
    {
      id: 'srv_6',
      serviceName: 'Cardiac Screening',
      department: 'Cardiology',
      price: 300,
      status: 'Active',
    },
    {
      id: 'srv_7',
      serviceName: 'Skin Allergy Test',
      department: 'Dermatology',
      price: 220,
      status: 'Active',
    },
    {
      id: 'srv_8',
      serviceName: 'Blood Test',
      department: 'Pathology',
      price: 150,
      status: 'Active',
    },
    {
      id: 'srv_9',
      serviceName: 'ENT Consultation',
      department: 'ENT',
      price: 230,
      status: 'Inactive',
    },
    {
      id: 'srv_10',
      serviceName: 'Nutrition Counseling',
      department: 'Nutrition',
      price: 250,
      status: 'Active',
    },
  ];
}
