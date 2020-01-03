import { Injectable } from '@angular/core';
import { APIService, APIVS, Apimethods } from '../core/api.service';
import { APIResult } from '../core/enums';
import { Specialities, Doctor, dateModel, Slot, Offer, OfferView, Insurance, Hospital } from '../models/models';
import { CoreService } from '../core/core.service';
import { HttpErrorHandlerService } from '../core/http-error-handler.service';
import { catchError, map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class DoctorsService extends CoreService {

    public SelectedDoctor: BehaviorSubject<Doctor> = new BehaviorSubject<Doctor>(new Doctor());
    $SelectedDoctor = this.SelectedDoctor.asObservable();

    public DoctorList: BehaviorSubject<Doctor[]> = new BehaviorSubject<Doctor[]>([]);
    $DoctorList = this.DoctorList.asObservable();

    public SelectedDateModel: BehaviorSubject<dateModel> = new BehaviorSubject<dateModel>(new dateModel());
    $SelectedDateModel = this.SelectedDateModel.asObservable();

    public SelectedOffer: BehaviorSubject<OfferView> = new BehaviorSubject<OfferView>(new OfferView());
    $SelectedOffer = this.SelectedOffer.asObservable();

    constructor(private api: APIService, private httpErrorHandler: HttpErrorHandlerService) {
        super();
        this.handleError = httpErrorHandler.createHandleError('DoctorsService');
    }


    getDoctors(searchKey = '', spId = -1, page = 1, areaId = -1, insuranceid = -1, hospitalid = -1) {
        return this.api.get<APIResult<Doctor[]>>(APIVS.V1, Apimethods.GetDoctors, {
            insuranceid: insuranceid, searchKey: searchKey,
            Speciality: spId, page: page, areaId: areaId, hospitalid: hospitalid
        }).pipe(
            map((res: APIResult<Doctor[]>) => {
                if (res.IsSucsess) {
                    this.DoctorList.next(res.Result);
                    return res.Result;
                }
            }),
            catchError(this.handleError('GetDoctors', []))
        );
    }

    getDoctorById(Id) {
        return this.api.get<APIResult<Doctor>>(APIVS.V1, Apimethods.GetDoctorById, { Id }).pipe(
            map((res: APIResult<Doctor>) => {
                if (res.IsSucsess) {
                    this.SelectedDoctor.next(res.Result);
                    return res.Result;
                }
            }),
            catchError(this.handleError('getDoctorById', []))
        );
    }

    getProfile() {
        return this.api.get<APIResult<Doctor>>(APIVS.V1, Apimethods.GetProfile, {}).pipe(
            map((res: APIResult<Doctor>) => {
                if (res.IsSucsess) {
                    return res.Result;
                }
            }),
            catchError(this.handleError('getProfile', []))
        );
    }

    getSlots() {
        return this.api.get<APIResult<Slot[]>>(APIVS.V1, Apimethods.GetSlots, {}).pipe(
            map((res: APIResult<Slot[]>) => {
                if (res.IsSucsess) {
                    return res.Result;
                }
            }),
            catchError(this.handleError('getSlots', []))
        );
    }

    updateProfile(data: Doctor) {
        return this.api.post<APIResult<boolean>>(APIVS.V1, Apimethods.UpdateProfile, data).pipe(
            map((res: APIResult<boolean>) => {
                return res;

            }),
            catchError(this.handleError('updateProfile', []))
        );
    }

    addSlost(startDate, endDate, SlotIds) {
        return this.api.post<APIResult<boolean>>(APIVS.V1, Apimethods.AddSlost, { startDate, endDate, SlotIds }).pipe(
            map((res: APIResult<boolean>) => {
                return res;
            }),
            catchError(this.handleError('addSlost', []))
        );
    }


    addAppointmentToDoctor(DoctorId, date, SlotId = -1) {
        return this.api.post<APIResult<boolean>>(APIVS.V1, Apimethods.AddAppointmentToDoctor, { DoctorId, date, SlotId }).pipe(
            map((res: APIResult<boolean>) => {
                return res;

            }),
            catchError(this.handleError('addAppointmentToDoctor', []))
        );
    }

    getOffers() {
        return this.api.get<APIResult<Offer[]>>(APIVS.V1, Apimethods.GetOffers, {}).pipe(
            map((res: APIResult<Offer[]>) => {
                if (res.IsSucsess) {
                    return res.Result;
                }
            }),
            catchError(this.handleError('getOffers', []))
        );
    }

    getOfferById(Id) {
        return this.api.get<APIResult<OfferView>>(APIVS.V1, Apimethods.GetOfferById, { Id }).pipe(
            map((res: APIResult<OfferView>) => {
                if (res.IsSucsess) {
                    this.SelectedOffer.next(res.Result);
                    return res.Result;

                }
            }),
            catchError(this.handleError('getOfferById', []))
        );
    }


    getInsurance() {
        return this.api.get<APIResult<Insurance[]>>(APIVS.V1, Apimethods.GetInsuranceList, {}).pipe(
            map((res: APIResult<Insurance[]>) => {
                if (res.IsSucsess) {
                    return res.Result;
                }
            }),
            catchError(this.handleError('getInsurance', []))
        );
    }


    getHospitalById(Id) {
        return this.api.get<APIResult<Hospital>>(APIVS.V1, Apimethods.GetHospitalById, { Id }).pipe(
            map((res: APIResult<Hospital>) => {
                if (res.IsSucsess) {
                    return res.Result;

                }
            }),
            catchError(this.handleError('getHospitalById', []))
        );
    }
}