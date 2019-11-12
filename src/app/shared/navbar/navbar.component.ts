import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  display1;
  display: boolean = false;
  showDialog() {
      this.display = true;
  }
  constructor() { }

  ngOnInit() {
  }

}
