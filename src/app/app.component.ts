import { Component, OnInit } from "@angular/core";
import { UserService } from "src/services/user/user.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "doctor-online";
  constructor(private user: UserService) {}
  ngOnInit() {
    this.user.getUserInfromation();
  }
}
