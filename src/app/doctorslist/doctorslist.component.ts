import { Component, OnInit } from "@angular/core";
import { DoctorsService } from "src/services/doctor/doctor.service";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { BaseService } from "src/services/core/base.service";
import { Doctor } from "src/services/models/models";
import { Subscription } from "rxjs";

@Component({
  selector: "doctorslist",
  templateUrl: "./doctorslist.component.html",
  styleUrls: ["./doctorslist.component.scss"]
})
export class DoctorslistComponent implements OnInit {
  doctors: Doctor[] = [];
  show: boolean = true;
  doctorlist: Subscription;
  doctorlist$: Subscription;

  constructor(public base: BaseService, private doc: DoctorsService) {}

  navigateToDoctor(doctor: Doctor) {
    this.doc.SelectedDoctor.next(doctor);
  }

  ngOnInit() {
    this.doctorlist$ = this.doc.$DoctorList.subscribe((doctors: Doctor[]) => {
      this.doctors = doctors;
      
    });

    this.doctorlist = this.doc.getDoctors().subscribe(data => {});
  }

  search(event) {
    // this.show = false;
    // console.log(event);
    // this.doctors = event;
    // console.log(this.doctors);
  }
}
