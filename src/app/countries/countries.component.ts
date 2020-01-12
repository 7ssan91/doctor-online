import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/services/core/base.service';

@Component({
  selector: 'countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  constructor(private base:BaseService) { }

  ngOnInit() {
  }

}
