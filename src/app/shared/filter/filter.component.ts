import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { BaseService } from "src/services/core/base.service";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { DoctorsService } from "src/services/doctor/doctor.service";
import { Doctor, Specialities, City, Area } from "src/services/models/models";
import { SpecialityService } from "src/services/speciality/speciality.service";
import { HomeService } from "src/services/home/home.service";

@Component({
  selector: "filter",
  templateUrl: "./filter.component.html",
  styleUrls: ["./filter.component.scss"]
})
export class FilterComponent implements OnInit {
  cities: City[] = [];
  citiesTemp: City[] = [];
  doctors: Doctor[] = [];
  selectedArea: Area = new Area();
  selectedCity: City = new City();
  @Output() public filterFinished = new EventEmitter<boolean>();

  specialities: Specialities[] = [];
  selectedspecialty: Specialities =new Specialities();
  searchKey = "";
  area: Area = new Area();
  areaId=-1;

  isRequisting:boolean=false;
  specialitiesTemp?: Specialities[] = [];
  constructor(
    public base: BaseService,
    private home: HomeService,
    private sp: SpecialityService,
    private doc: DoctorsService
  ) {}

  ngOnInit() {
    this.sp.getSpeciality().subscribe(data => {
      this.specialities = data;
    });
    // this.doc.getDoctors().subscribe(data => {
    //   this.doctors = data;
    // });
  }
  getCity() {
    this.home.getAvilableCities().subscribe(data => {
      this.cities = data;
      Object.assign(this.citiesTemp, data);
    });
  }

  isSlectedArea(Id) {
    return this.base.getArea().Id == Id;
  }


  selectCity(cit: City) {
    this.selectedCity = cit;
  }


  selectArea(ar: Area) {
    this.selectedArea = ar;
    this.sp.getSpecialitiesForArea(ar.Id).subscribe((data: Specialities[]) => {
      this.specialities = data;
    });
  }
  public search(){
    this.isRequisting=true;
    this.selectedArea.Id;
    this.doc.getDoctors(this.searchKey,this.selectedspecialty.Id,1,this.selectedArea.Id).subscribe((searchDoc)=>{
    this.isRequisting=false;
     
      this.filterFinished.emit(true);
    })
  }
}
