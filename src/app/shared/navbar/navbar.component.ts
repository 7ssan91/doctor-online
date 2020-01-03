import { Component, OnInit } from "@angular/core";
import { BaseService } from "../../../services/core/base.service";
import { User } from "../../../services/models/models";
import { UserService } from "../../../services/user/user.service";

@Component({
  selector: "navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"]
})
export class NavbarComponent implements OnInit {
  display1;
  display: boolean = false;
  userInfo: User;
  showDialog() {
    this.display = true;
  }
  constructor(public base: BaseService, private user: UserService) {}

  logoutUser()
  {
    this.user.logout();
  }
  ngOnInit() {
    this.user.$userInfo.subscribe((data: User) => {
      this.userInfo = data;
    });
  }
}
