import { Injectable } from '@angular/core';
import { APIService, APIVS, Apimethods } from '../core/api.service';
import { APIResult } from '../core/enums';
import { map, catchError } from 'rxjs/operators';
import { CoreService } from '../core/core.service';
import { HttpErrorHandlerService } from '../core/http-error-handler.service';
import { BaseService } from '../core/base.service';
import { LoginResponse } from '../models/models';

@Injectable()
export class UserService extends CoreService {


    constructor(private api: APIService, private httpErrorHandler: HttpErrorHandlerService) {
        super();
        this.handleError = httpErrorHandler.createHandleError('HomeService');

    }



    createUserUniqueId() {
        return this.api.get<APIResult<string>>(APIVS.V1, Apimethods.GetUniqueID).pipe(
            map((res: APIResult<string>) => {
                if (res.IsSucsess) {
                    return res;
                }
            }),
            catchError(this.handleError('createUserUniqueId', []))
        );
    }

    Login(cuser) {
        return this.api.post<APIResult<LoginResponse>>(APIVS.V1, Apimethods.Login, cuser).pipe(
            map((res: APIResult<LoginResponse>) => {
                if (res.IsSucsess) {
                    this.completeLoginInformation(res.Result);
                }
                return res;

            }),
            catchError(this.handleError('Login', []))
        );
    }

    register(cuser) {
        return this.api.post<APIResult<LoginResponse>>(APIVS.V1, Apimethods.Register, cuser).pipe(
            map((res: APIResult<LoginResponse>) => {
                if (res.IsSucsess) {
                    this.completeLoginInformation(res.Result);
                }
                return res;

            }),
            catchError(this.handleError('Login', []))
        );
    }


    completeLoginInformation(LoginResponse: LoginResponse) {
        this.api.base.setAuthToken(LoginResponse.AccessToken);
        this.api.base.setUserInformation(LoginResponse.User);
    };
}