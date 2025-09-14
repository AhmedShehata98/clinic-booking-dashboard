import { Component } from '@angular/core';

@Component({
  selector: 'app-locations',
  imports: [],
  templateUrl: './locations.html',
  styleUrl: './locations.css',
  host: {
    class: 'dashboard-section',
  },
})
export class Locations {
  locations = [
    {
      id: '1',
      clinicName: 'Harmony Health Clinic',
      address: 'California',
      img: 'https://picsum.photos/200',
    },
    {
      id: '2',
      clinicName: 'WellCare Medical Center',
      address: 'taxas',
      img: 'https://picsum.photos/201',
    },
    {
      id: '3',
      clinicName: 'VitalLife Clinic',
      address: 'florida',
      img: 'https://picsum.photos/202',
    },
    {
      id: '4',
      clinicName: 'CureWell Medical Hub',
      address: 'ohio',
      img: 'https://picsum.photos/203',
    },
  ];
}
