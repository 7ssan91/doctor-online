import { Component, OnInit, Input } from '@angular/core';
import { dateModel, LoginResponse } from 'src/services/models/models';
import { UserService } from 'src/services/user/user.service';
import { BaseService } from 'src/services/core/base.service';
import { APIResult } from 'src/services/core/enums';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  cuser: any = { username: '', password: '' };
  reigesterView: boolean = false;
  @Input() datemodel: dateModel;

  constructor( public base: BaseService,
    private user: UserService) { }

  ngOnInit() {
  }
  login() {

    if (this.cuser.username && this.cuser.password) {
      this.user.Login(this.cuser).subscribe(async (data: APIResult<LoginResponse>) => {
        if (data.IsSucsess) {
         alert('success')
         
        } else {
          alert('failed')
        }
      });
    }
    // else {
    //   this.base.showToast(this.base.translate('filllogin'));
    // }
  }
}
