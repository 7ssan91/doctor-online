import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/services/models/models';
import { Router, ActivatedRoute } from '@angular/router';
import { DoctorsService } from 'src/services/doctor/doctor.service';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/services/core/base.service';

@Component({
  selector: 'app-doctorview',
  templateUrl: './doctorview.component.html',
  styleUrls: ['./doctorview.component.scss']
})
export class DoctorviewComponent implements OnInit {
doctor:Doctor= new Doctor();
doctor_id:number;
  constructor(public base: BaseService, private route: Router, http: HttpClient,private doc:DoctorsService, private acroute:ActivatedRoute) { 
    this.doctor_id = this.acroute.snapshot.params.id;
  }


  ngOnInit() {
    this.doc.getDoctorById(this.doctor_id).subscribe((docs:Doctor)=>{
      this.doctor=docs;
      console.log(this.doctor)
    }) 
  }
  openMap(latlng: string) {
    // window.open("https://www.google.com/maps/?q=" + latlng, '_system');
    this.base.goToLink("https://www.google.com/maps/?q=" + latlng);
  }

}
