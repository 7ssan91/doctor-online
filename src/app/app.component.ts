import { Component, OnInit } from "@angular/core";
import { UserService } from "src/services/user/user.service";
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { BaseService } from '../services/core/base.service';

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  appsview: boolean = false;
  constructor(private user: UserService, private router: Router,private base:BaseService) { }

  ngOnInit() {
    this.user.getUserInfromation();

    this.router.events.subscribe((evt) => {
      if (evt instanceof NavigationStart) {
        let url = evt.url.toLowerCase();
        this.base.getDefaultOpsFromLink()
        if (url=='/') {
          this.appsview = false;
        }
        else
          this.appsview = true;

        //indecate if the user refresh the page or come from outside application
        // this.base.Browserrefresh = !this.router.navigated;
      }

      if (!(evt instanceof NavigationEnd)) {
        return;
      } else {


      }

      window.scrollTo(0, 0)

    });

  }
}
