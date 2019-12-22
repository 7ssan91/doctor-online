import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/services/core/base.service';
import { Router, ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { DoctorsService } from 'src/services/doctor/doctor.service';
import { Doctor, Specialities, City, Area } from 'src/services/models/models';
import { SpecialityService } from 'src/services/speciality/speciality.service';
import { HomeService } from 'src/services/home/home.service';

@Component({
  selector: 'filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  cities: City[] = [];
  citiesTemp: City[] = [];
  doctors:Doctor[]=[];
  selectedArea: Area = new Area();
  selectedCity: City = new City();
  selectedSpe:Specialities=new Specialities();
  specialities:Specialities[]=[]
  searchKey='';
  depth:number =1;
  area: Area = new Area();
  specialitiesTemp?: Specialities[] = [];
  constructor(public base: BaseService, private home:HomeService ,private sp:SpecialityService, private route: Router, http: HttpClient,private doc:DoctorsService, private acroute:ActivatedRoute) { 
  }

  ngOnInit() {
    this.sp.getSpeciality().subscribe((data)=>{
      this.specialities=data;
    });
    this.doc.getDoctors().subscribe((data)=>{
      this.doctors=data;
    });
  }
 getCity(){
  this.home.getAvilableCities().subscribe((data) => { this.cities = data; Object.assign(this.citiesTemp, data);

  })
 };
 isSlectedArea(Id) {
  return this.base.area.getValue().Id == Id;
}



selectCity(cit: City) {
  this.selectedCity = cit;
  this.depth = 2;
};
selectArea(area:any) {
  console.log(area)
  this.sp.getSpecialitiesForArea(this.area).subscribe((data: Specialities[]) => {
    this.specialities = data;
    this.specialitiesTemp = data;
    console.log(data)
  });}
}
