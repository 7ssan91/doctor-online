import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/components/common/selectitem';
import { BaseService } from 'src/services/core/base.service';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorsService } from 'src/services/doctor/doctor.service';
import { Doctor, Hospital, Offer, Specialities } from 'src/services/models/models';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { SpecialityService } from 'src/services/speciality/speciality.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
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
  specs:Specialities[];
  slides=[{
    Id:1,
    src:'../../assets/imgs/banner3.jpg'
  },
  {
    Id:2,
    src:'../../assets/imgs/doctor.png'
  },
  {
    Id:3,
    src:'../../assets/imgs/medical-background-with-doctor-close-up-vector-23738004.jpg'
  },
];
  constructor(public base: BaseService, private sp:SpecialityService, private route: Router, http: HttpClient,private doc:DoctorsService, private acroute:ActivatedRoute) {

  }
 
   customOptions: OwlOptions = {
    // nav: true,
    autoWidth: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 100,
    items: 1,
    navText: ['d', 'a']
  }
  scroll(el: HTMLElement) {
    el.scrollIntoView();
}
  ngOnInit() {
    this.doc.getDoctors("",-1,1,-1,-1,-1).subscribe((data)=>{
      this.doctors=data;
    });
    this.sp.getSpeciality().subscribe((data)=>{
      this.specs=data;
      console.log(this.specs)

    })

  }
}