import { Component, OnInit } from '@angular/core';
import { BaseService } from '../../services/core/base.service';
import { HomeService } from '../../services/home/home.service';
import { Country } from '../../services/models/models';
import { Router } from '@angular/router';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  cuntries: Country[] = [];
  constructor(private base: BaseService, private home: HomeService, private route: Router) { }



  goToCountry(contry: Country) {
    this.route.navigate(['en' + contry.SiteLink]);

  }

  ngOnInit() {
    this.home.getOPSCountry().subscribe((cu: Country[]) => {
      this.cuntries = cu;
    });

  }

}
