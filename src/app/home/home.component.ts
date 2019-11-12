import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  date3:Date;
  cities:SelectItem[];
  selectedCity:string;
  constructor() {
    this.cities=[
      {label: 'cairo', value: 'cairo'},
      {label: '6 October', value: '6 October'},
      {label: 'zayed', value: 'zayed'},
      {label: 'Ford', value: 'Ford'},
      {label: 'Honda', value: 'Honda'},
      {label: 'Jaguar', value: 'Jaguar'},
      {label: 'Mercedes', value: 'Mercedes'},
      {label: 'Renault', value: 'Renault'}
    ];
   }

  ngOnInit() {
  }

}
