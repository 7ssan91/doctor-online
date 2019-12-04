import { Injectable } from '@angular/core';
import { APIService, APIVS, Apimethods } from '../core/api.service';
import { HttpErrorHandlerService } from '../core/http-error-handler.service';
import { APIResult } from '../core/enums';
import { Country, BannerModel, City } from '../models/models';
import { map, catchError } from 'rxjs/operators';
import { CoreService } from '../core/core.service';

@Injectable()
export class HomeService extends CoreService{

  constructor(private api: APIService, private httpErrorHandler: HttpErrorHandlerService) { 
    super();
    this.handleError = httpErrorHandler.createHandleError('HomeService');
  }
  getCountry() {
    return this.api.get<APIResult<Country[]>>(APIVS.V1, Apimethods.GetCountries).pipe(
        map((res: APIResult<Country[]>) => {
            if (res.IsSucsess) {
                return res.Result;
            }
        }),
        catchError(this.handleError('getCountry', []))
    );
}

getBanners(type) {
    return this.api.get<APIResult<BannerModel[]>>(APIVS.V1, Apimethods.GetBanners, { type }).pipe(
        map((res: APIResult<BannerModel[]>) => {
            if (res.IsSucsess) {
                return res.Result;
            }
        }),
        catchError(this.handleError('getBanners', []))
    );
}

getAvilableCities() {
    return this.api.get<APIResult<City[]>>(APIVS.V1, Apimethods.GetAvilableCities).pipe(
        map((res: APIResult<City[]>) => {
            if (res.IsSucsess) {
                return res.Result;
            }
        }),
        catchError(this.handleError('getAvilableCities', []))
    );
}
}
