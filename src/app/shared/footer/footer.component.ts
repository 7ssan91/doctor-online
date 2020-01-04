import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/services/core/base.service';

@Component({
  selector: 'footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private base:BaseService) { }

  ngOnInit() {
  }

}
