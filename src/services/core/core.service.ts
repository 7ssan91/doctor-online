import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HandleError } from './http-error-handler.service';

@Injectable()
export class CoreService {
  //should loaded throw baseservice object only
  public loading: BehaviorSubject<boolean> = new BehaviorSubject(false);
  loading$ = this.loading.asObservable();

  public handleError: HandleError;
  private _allowlog: boolean = true;

  constructor() { }
  log(e, location) {
    if (this._allowlog) {
      console.log('----------------------- Log from ' + location + ' --------------------------');
      console.log(e);
    }
  }
}
