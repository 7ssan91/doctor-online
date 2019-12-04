import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User, Area, Country, dateModel } from '../models/models';
import { StorageService } from './storage.service';
import { LocalService } from './local.service';
import { storageKeys } from './enums';
import * as momenttz from 'moment-timezone';
import { EncrypthelperService } from './encrypthelper.service';

@Injectable()
export class BaseService {
  public lang: BehaviorSubject<string> = new BehaviorSubject<string>("en");
    local = this.lang.asObservable();

    public uniqID: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public authToken: BehaviorSubject<string> = new BehaviorSubject<string>("");
    public userInformation: BehaviorSubject<User> = new BehaviorSubject<User>(new User());
    public area: BehaviorSubject<Area> = new BehaviorSubject<Area>(new Area());
    public country: BehaviorSubject<Country> = new BehaviorSubject<Country>(new Country());


  constructor(private storage: StorageService, private localization: LocalService, public enc: EncrypthelperService,) { }
   

  getLang() {
      return this.lang.getValue();
  }

  getcountry() {
      return this.country.getValue();
  }

  getDirection() {
      return this.lang.getValue() == "en" ? 'ltr' : 'rtl';
  }

  setCurrentArea(area) {
      this.area.next(area);
      this.storage.set(storageKeys.area, JSON.stringify(area)).then();
  }

  setCurrentLang(Lang) {
      this.lang.next(Lang);
      this.storage.set(storageKeys.Lang, Lang).then();
  }

  setcountry(country) {
      this.country.next(country);
      this.storage.set(storageKeys.country, JSON.stringify(country)).then();
  }


  translate(en, ar = '') {
      if (ar) {
          return this.lang.value == "ar" ? ar : en;

      } else {
          return this.localization.getlocalbykey(en, this.lang.value);
      }

  }


  setAllFromStorage() {
      this.storage.get(storageKeys.Lang).then(data => {
          if (data)
              this.lang.next(data);
      });

      this.storage.get(storageKeys.UniqueId).then(data => {
          if (data)
              this.uniqID.next(data);
      });

      this.storage.get(storageKeys.authToken).then(data => {
          if (data) {
              let acc = this.enc.decrypt(data);;
              this.authToken.next(acc);
          }
      });

      this.storage.get(storageKeys.userInformation).then(data => {
          if (data)
              this.userInformation.next(JSON.parse(this.enc.decrypt(data)));
      });

      this.storage.get(storageKeys.area).then(data => {
          if (data)
              this.area.next(JSON.parse(data));
      });

      this.storage.get(storageKeys.country).then(data => {
          if (data)
              this.country.next(JSON.parse(data));
      });
  }


  setUniqID(data) {
      this.uniqID.next(data);
      this.storage.set(storageKeys.UniqueId, data).then();
  }


  getuniqID() {
      return this.uniqID.getValue();
  }


  IsDoctor() {
      return this.userInformation.getValue().IsDoctor;
  }
  setAuthToken(data) {
      this.authToken.next(data);
      this.storage.set(storageKeys.authToken, this.enc.encrypt(data)).then();
  }

  setUserInformation(data) {
      this.userInformation.next(data);
      this.storage.set(storageKeys.userInformation, this.enc.encrypt(JSON.stringify(data))).then();
  }


  getAuthToken() {
      return this.authToken.getValue();
  }

  getSelectedArea() {
      return this.area.getValue();
  }

  isLoggedIn(): boolean {
      return this.getAuthToken() != '';
  }

  isFirstState(): boolean {
      return this.getcountry().Id <1;
  }


  logoutUser() {
      this.authToken.next('');
      this.userInformation.next(new User());
      this.storage.delete(storageKeys.authToken).then();
      this.storage.delete(storageKeys.userInformation).then();
  }



  getDateFormat(date: any, adddays: number, format: string) {
      var dat;
      if (adddays > 0) {
          dat = momenttz.tz(date, "Asia/kuwait").add(adddays, 'days');
      }
      else {
          dat = momenttz.tz(date, "Asia/kuwait");
      }

      let now = momenttz.tz(dat, "Asia/kuwait").format(format);
      return now;
  }

  getDateModel(date: any, adddays: number, format: string) {
      var dat;
      if (adddays > 0) {
          dat = momenttz.tz(date, "Asia/kuwait").add(adddays, 'days');
      }
      else {
          dat = momenttz.tz(date, "Asia/kuwait");
      }

      let now = momenttz.tz(dat, "Asia/kuwait").format(format);
      let formatx = momenttz.tz(dat, "Asia/kuwait").format('DD-MM');

      let datemodd: dateModel = { NameAr: formatx.toString(), NameEn: formatx.toString(), date: now };
      return datemodd;
  }
}
