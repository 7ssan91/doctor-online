import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { UserService } from '../services/user/user.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private user: UserService, private router: Router) {
    
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {


    if (!this.user.isLoggedIn()) {
      if (next!.url[0].path == 'signup' || next!.url[0].path == 'login') {
        return true;
      }
      else {
        this.router.navigate(['/']);
        return false;
      }
    }
    else {
      if (next!.url[0].path == 'signup' || next!.url[0].path == 'login') {
        this.router.navigate(['/']);
        return false;
      }
      else {
        return true;
      }
    }


  }

}