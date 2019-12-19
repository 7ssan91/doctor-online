import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/services/doctor/doctor.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/services/core/base.service';
import { Doctor } from 'src/services/models/models';

@Component({
  selector: 'doctorslist',
  templateUrl: './doctorslist.component.html',
  styleUrls: ['./doctorslist.component.scss']
})
export class DoctorslistComponent implements OnInit {
  doctors:Doctor[]=[];
  constructor(public base: BaseService, private route: Router, http: HttpClient,private doc:DoctorsService, private acroute:ActivatedRoute) {}
  ngOnInit() {
    this.doc.getDoctors().subscribe((data)=>{
      this.doctors=data;
    })
  }


}
