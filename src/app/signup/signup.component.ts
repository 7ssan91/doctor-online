import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/services/core/base.service';
import { UserService } from 'src/services/user/user.service';
import { APIResult } from 'src/services/core/enums';
import { LoginResponse } from 'src/services/models/models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  ruser: any = { username: '', password: '', fullname: '', phone: '', email: '' };
  constructor(public base: BaseService,
    private user: UserService) { }

  ngOnInit() {
  }
   async register() {

    if (this.ruser.username && this.ruser.password && this.ruser.email && this.ruser.fullname && this.ruser.phone) {

      this.user.register(this.ruser).subscribe(async (data: APIResult<LoginResponse>) => {
        if (data.IsSucsess) {
         alert('success')

        } else {
          alert('failed')
        }
      });
    }
    // else {
    //   this.base.showToast(this.base.translate('fillregister'));
    // }
  }
}
