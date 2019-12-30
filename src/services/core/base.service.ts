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



    constructor(private storage: StorageService, private localization: LocalService, public enc: EncrypthelperService, ) { }







    goToLink(url: string) {
        window.open(url, "_blank");
    }

    getLang() {
        return location.href.includes("/ar-") ? "ar" : "en";
    }


    getArea() {
        return this.storage.getArea();
    }

    getAuthToken() {
        return this.storage.getAuthtoken();
    }

    getuniqID() {
        return this.storage.getuniqID();
    }

    setAuthToken(data) {
        this.storage.set(storageKeys.authToken, this.enc.encrypt(data));
    }

    setUserInformation(data) {
        this.storage.set(storageKeys.userInformation, this.enc.encrypt(JSON.stringify(data)));
    }


    translate(en, ar = '') {
        if (ar) {
            return this.getLang() == "ar" ? ar : en;

        } else {
            return this.localization.getlocalbykey(en, this.getLang());
        }

    }



    getCountry() {
        return location.href.includes("-kw") ? 1 : 2;
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
