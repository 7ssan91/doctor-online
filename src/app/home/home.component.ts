import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { BaseService } from 'src/services/core/base.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorsService } from 'src/services/doctor/doctor.service';
import { Doctor, Hospital, Offer } from 'src/services/models/models';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  date3:Date;
  cities:SelectItem[];
  selectedCity:string;
  redirecturl: string = "";
  spcialiytId: number = -1;
  Insuranceid: number = -1;
  doctors: Doctor[] = [];
  firstLoading = true;
  rate: number = 4.5;
  searchkey: string = '';
  areaId = -1;
  autoreload: boolean = true;
  offers:Offer[];

  constructor(public base: BaseService, private route: Router, http: HttpClient,private doc:DoctorsService, private acroute:ActivatedRoute) {

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
    
    // this.doc.getOffers().subscribe((data)=>{
    //   this.offers=data;
    //   console.log(this.offers)
    // });
    this.doc.getDoctors("",-1,1,-1,-1,-1).subscribe((data)=>{
      this.doctors=data;
      console.log(this.doctors)
    })
  }
}