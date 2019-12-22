import { Injectable } from '@angular/core';
import { APIService, APIVS, Apimethods } from '../core/api.service';
import { APIResult } from '../core/enums';
import { Specialities } from '../models/models';
import { CoreService } from '../core/core.service';
import { HttpErrorHandlerService } from '../core/http-error-handler.service';
import { catchError, map } from 'rxjs/operators';

@Injectable()
export class SpecialityService extends CoreService {

    constructor(private api: APIService, private httpErrorHandler: HttpErrorHandlerService) {
        super();
        this.handleError = httpErrorHandler.createHandleError('SpecialityService');
    }


    getSpeciality() {
        return this.api.get<APIResult<Specialities[]>>(APIVS.V1, Apimethods.GetSpecialities, {}).pipe(
            map((res: APIResult<Specialities[]>) => {
                if (res.IsSucsess) {
                    return res.Result;
                }
            }),
            catchError(this.handleError('getSpeciality', []))
        );
    }

    getSpecialitiesForArea(areaid) {
        return this.api.get<APIResult<Specialities[]>>(APIVS.V1, Apimethods.GetSpecialitiesForArea, { areaid }).pipe(
            map((res: APIResult<Specialities[]>) => {
                if (res.IsSucsess) {
                    return res.Result;
                }
            }),
            catchError(this.handleError('getSpecialitiesForArea', []))
        );
    }
}