import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams, HttpClient } from '@angular/common/http'
import { ServerMode, Lang, CuHttpHeaders } from './enums';
// import { HttpClient } from 'selenium-webdriver/http';
import { BaseService } from './base.service';
import { Params } from '@angular/router';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable()
export class APIService {
  _apiURI: string;
  _serverMode: ServerMode = ServerMode.Local;
  _lang: Lang = Lang.English;
  _headeroptions: HttpHeaders;

  _headeroptionsFiles: HttpHeaders;
  _accessuser = 'Q3jATuSuhK9GnC2y0IGVuY29kZWQgc3RyaW5';
  _accesspassword = '5erAOP54LJIKLQcyXT8C';
  appversion = '1.0.0';
  loacl: boolean = true;

  constructor(private http: HttpClient, public base: BaseService) {
    this.setAPiSettings(APIVS.V1);
  }

  setAPiSettings(apivs: APIVS = APIVS.V1) {
    if (this.loacl) {
      this._apiURI = apivs == APIVS.V1 ? APILink.localv1 : APILink.localv1;
      this._serverMode = ServerMode.Local;

    } else {
      this._apiURI = apivs == APIVS.V1 ? APILink.livev1 : APILink.livev2;
      this._serverMode = ServerMode.Live;
    }

  }

  gethttpParms(params: Params): HttpParams {
    let paramsback: HttpParams = new HttpParams();
    if (params) {
      for (let property in params) {
        if (params.hasOwnProperty(property)) {
          paramsback = paramsback.append(property, params[property]);
        }
      }
    }

    return paramsback;
  }


  buildheaders(apivs: APIVS) {
    var headers: CuHttpHeaders;
    this.setAPiSettings(apivs);

    this._lang = this.base.getLang() == 'en' ? Lang.English : Lang.Arabic;
    var _accessToken = this.base.getAuthToken();
    if (_accessToken) {

      headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': ('Basic ' + btoa(this._accessuser + ":" + this._accesspassword)),
        'device': '2',
        'version': this.appversion,
        'userToken': _accessToken,
        'uniqID': this.base.getuniqID(),
        'lang': this._lang.toString(),
        countryId: this.base.getCountry().toString(),
      };
    }
    else {

      headers = {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': ('Basic ' + btoa(this._accessuser + ":" + this._accesspassword)),
        'uniqID': this.base.getuniqID(),
        'device': '2',
        'version': this.appversion,
        'lang': this._lang.toString(),
        countryId: this.base.getCountry().toString(),
      }
    }
    this._headeroptions = new HttpHeaders(headers);
  }
  build(method: Apimethods, extrereplace = '') {
    let methodstring = method.toString();
    if (extrereplace != '') {
      methodstring = method.replace("??", extrereplace);
    }
    return `${this._apiURI}${methodstring}`
  }
  get<T>(apivs: APIVS, method: Apimethods, parms: any = {}, extrereplace = ''): Observable<T> {
    this.buildheaders(apivs);
    const options = { headers: this._headeroptions, params: this.gethttpParms(parms) };
    return this.http.get<T>(this.build(method, extrereplace), options).pipe(map((data: T) => { return data }));
  }

  post<T>(apivs: APIVS, method: Apimethods, parms: any = {}, extrereplace = ''): Observable<T> {
    this.buildheaders(apivs);

    const options = { headers: this._headeroptions };
    const body = JSON.stringify(parms);

    return this.http.post<T>(this.build(method, extrereplace), body, options).pipe(map((data: T) => { return data }));
  }

}



export enum APILink {
  livev1 = 'https://donline.emaogroup.com/api/',
  betav1 = 'https://donline.emaogroup.com/api/',
  localv1 = 'http://localhost:62160/api/',

  livev2 = 'http://localhost:62160/api/',
  betav2 = 'http://localhost:62160/api/',
  localv2 = 'http://localhost:62160/api/'
}

export enum APIVS {
  V1 = 1,
  V2 = 2
}

export enum Apimethods {
  Login = 'auth/Login',
  Register = 'auth/register',
  GetUniqueID = 'auth/getUniqueId',
  ResetUserPassword = 'ResetUserPassword',
  GetCountries = 'settings/GetCountries',
  GetAvilableCities = 'settings/GetAvilableCities',
  GetSpecialities = 'settings/GetSpecialities',
  GetSpecialitiesForArea = 'settings/GetSpecialitiesForArea',
  GetSlots = 'settings/getSlots',
  GetDoctors = 'Doctors/getDoctors',
  GetDoctorById = 'Doctors/getDoctorById',
  AddAppointmentToDoctor = 'Doctors/addAppointmentToDoctor',
  GetAppointments = 'Doctors/getAppointments',
  GetAllAppointments = 'Doctors/getAllAppointments',
  GetProfile = 'Doctors/getProfile',
  UpdateProfile = 'Doctors/updateProfile',
  AddSlost = 'Doctors/addSlost',
  GetBanners = 'settings/getBanners',
  GetOffers = 'Offers/getOffers',
  GetOfferById = 'Offers/getOfferById',
  GetInsuranceList = 'Insurance/getInsuranceList',
  GetHospitalById = 'Hospital/getHospitalById',
  GetOPSCountry = 'settings/GetOPSCountry',


}