import { Injectable, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User, Area, Country, dateModel } from '../models/models';
import { StorageService } from './storage.service';
import { LocalService } from './local.service';
import { storageKeys } from './enums';
import * as momenttz from 'moment-timezone';
import { EncrypthelperService } from './encrypthelper.service';

@Injectable()
export class BaseService {



    constructor(private storage: StorageService, private localization: LocalService, public enc: EncrypthelperService, @Inject('BASE_URL') private baseUrl: string) { }





    isLoggedIn(): boolean {
        return this.storage.isLoggedIn();
    }

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
        this.storage.set(storageKeys.authToken, data);
    }

    setUserInformation(data) {
        this.storage.set(storageKeys.userInformation, JSON.stringify(data));
    }


    translate(en, ar = '') {
        if (ar) {
            return this.getLang() == "ar" ? ar : en;

        } else {
            return this.localization.getlocalbykey(en, this.getLang());
        }

    }

    getDefaultOpsFromLink(): Country {
        let link = this.baseUrl;
        if (link.includes('-kw')) {
            return {
                Id: 1,
                NameAr: "الكويت",
                NameEn: "Kuwait",
                SiteLink: "-kw",
                CurrancySymbolAr: "د.ك",
                CurrancySymbolEn: "KD",
                Code: "+956",
                DecimalNumbers: 3,
                ImageLink: "http://doctoronline4u.com/cdn/kuwait.png"
            };
        } else {
            return {
                Id: 2,
                NameAr: "مصر",
                NameEn: "EGYPT",
                SiteLink: "-eg",
                CurrancySymbolAr: "ج.م",
                CurrancySymbolEn: "LE",
                Code: "+2",
                DecimalNumbers: 2,
                ImageLink: "http://doctoronline4u.com/cdn/egypt.png",
            };
        }
    }


    getRedirectLocalURL() {
        let route = '';
        if (this.getDefaultOpsFromLink().Id == 1) {
            let after = this.baseUrl.split(this.translate('/en-kw', '/ar-kw'))[1];
            route = this.translate('/ar-kw', '/en-kw') + after;
        } else {
            let after = this.baseUrl.split(this.translate('/en-sa', '/ar-sa'))[1];
            route = this.translate('/ar-eg', '/en-eg') + after;
        }
        return route;
    }




    getrouterlink(to) {
        let ops = this.getDefaultOpsFromLink();
        let isArabic = this.baseUrl.includes('/ar-');
        let route = '';
        switch (ops.Id) {
            case 1:
                route = isArabic ? '/ar-kw/' : '/en-kw/';
                break;
            case 2:
                route = isArabic ? '/ar-eg/' : '/en-eg/';
                break;
            default:
                route = isArabic ? '/ar-kw/' : '/en-kw/';
                break;
        }
        return [route + to];
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
