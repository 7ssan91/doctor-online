import { Component, OnInit } from "@angular/core";
import { Doctor, dateModel } from "src/services/models/models";
import { Router, ActivatedRoute } from "@angular/router";
import { DoctorsService } from "src/services/doctor/doctor.service";
import { HttpClient } from "@angular/common/http";
import { BaseService } from "src/services/core/base.service";
import { Subscription } from "rxjs";

@Component({
  selector: "doctorview",
  templateUrl: "./doctorview.component.html",
  styleUrls: ["./doctorview.component.scss"]
})
export class DoctorviewComponent implements OnInit {
  doctor: Doctor = new Doctor();
  doctorId: number;
  dayslist: dateModel[] = [];
  dayslist2: dateModel[] = [];
  dayslist3: dateModel[] = [];

  docSubscribe: Subscription;
  docSubscribe$: Subscription;

  constructor(
    public base: BaseService,
    private route: Router,
    http: HttpClient,
    private doc: DoctorsService,
    private acroute: ActivatedRoute
  ) {
    this.doctorId = this.acroute.snapshot.params.id;
  }

  ngOnInit() {
    let qparam = this.acroute.snapshot.queryParams;
    this.doctorId = qparam.Id;
    if (this.doctorId) {
      this.docSubscribe = this.doc
        .getDoctorById(this.doctorId)
        .subscribe((docs: Doctor) => {
          // this.doctor = docs;
          this.getdates();
        });

      this.docSubscribe$ = this.doc.$SelectedDoctor.subscribe(
        (docs: Doctor) => {
          this.doctor = docs;
        }
      );
    }
  }
  openMap(latlng: string) {
    // window.open("https://www.google.com/maps/?q=" + latlng, '_system');
    this.base.goToLink("https://www.google.com/maps/?q=" + latlng);
  }
  isdoctorAvilableThisDay(item: dateModel) {
    // console.log(item);
    item.DoctorId = this.doctorId;
    item.IsAvilable =
      this.doctor.Avilabilatiy.filter(
        i =>
          item.date >=
            this.base.getDateFormat(i.StartDate, 0, "YYYY-MM-DD 00:00:00") &&
          item.date <=
            this.base.getDateFormat(i.Enddate, 0, "YYYY-MM-DD 00:00:00")
      ).length > 0;
    return !item.IsAvilable;
  }
  getdates() {
    this.dayslist = [];
    this.dayslist2 = [];
    this.dayslist3 = [];
    let x: Date = new Date();
    let d0 = this.base.getDateFormat(x, 0, "YYYY-MM-DD 00:00:00");
    let d1 = this.base.getDateFormat(x, 1, "YYYY-MM-DD 00:00:00");
    let d2 = this.base.getDateModel(x, 2, "YYYY-MM-DD 00:00:00");
    let d3 = this.base.getDateModel(x, 3, "YYYY-MM-DD 00:00:00");
    let d4 = this.base.getDateModel(x, 4, "YYYY-MM-DD 00:00:00");
    let d5 = this.base.getDateModel(x, 5, "YYYY-MM-DD 00:00:00");
    let d6 = this.base.getDateModel(x, 6, "YYYY-MM-DD 00:00:00");
    let d7 = this.base.getDateModel(x, 7, "YYYY-MM-DD 00:00:00");
    let d8 = this.base.getDateModel(x, 8, "YYYY-MM-DD 00:00:00");
    this.dayslist.push({
      date: d0.toString(),
      NameEn: "Today",
      NameAr: "اليوم"
    });
    this.dayslist.push({
      date: d1.toString(),
      NameEn: "Tomorrow",
      NameAr: "غداً"
    });
    this.dayslist.push(d2);
    this.dayslist2.push(d3);
    this.dayslist2.push(d4);
    this.dayslist2.push(d5);
    this.dayslist3.push(d6);
    this.dayslist3.push(d7);
    this.dayslist3.push(d8);
  }
  async book(item: dateModel) {
    //AvilabiltyType 1= slots

    if (this.doctor.AvilabiltyType == 1) {
      this.doc.SelectedDateModel.next(item);
      // this.route.navigate(['/tabs/doctorlist/doctorslots', this.doctorId]);
    }
  }

  ngOnDestroy() {
    try {
      this.docSubscribe.unsubscribe();
      this.docSubscribe$.unsubscribe();
    } catch (error) {}
  }
}
