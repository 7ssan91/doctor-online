import { Injectable, Inject } from '@angular/core';
import { storageKeys, ILocale } from './enums';
import { EncrypthelperService } from './encrypthelper.service';

@Injectable()
export class StorageService {
  className = 'StorageService';
  constructor(@Inject('LOCALSTORAGE') private localStorage: any,
  @Inject('SessionStorage') private sessionStorage: any, public enc:EncrypthelperService) { }
  async get(storageKeys: storageKeys) {
    let result = await this.localStorage.get(storageKeys).then((data) => { return data; },
        error => {
            console.error(error);

        })
    return result;
}

  set(storageKeys: storageKeys, values: string) {
    return this.localStorage.set(storageKeys, values).then(
        data => { return data; },
        error => console.error(error)
    );
}



delete(storageKeys: storageKeys) {
    return this.localStorage.remove(storageKeys).then(data => { return data; },
        error => console.error(error));
}
 



  isRememberMe(): boolean {
    if (!!localStorage.getItem('auth_token')) {
      return true;
    } else if (!!sessionStorage.getItem('auth_token')) {
      return false;
    }
    else {
      return false;
    }
  }

  removeAllStorage() {
    if (!!localStorage.getItem(StorageID.UserAuthToken)) {
      localStorage.removeItem(StorageID.UserAuthToken);
      localStorage.removeItem(StorageID.UserI);
      localStorage.removeItem(StorageID.hashedemail);

    } else {
      sessionStorage.removeItem('auth_token');
      sessionStorage.removeItem('ui');
      localStorage.removeItem(StorageID.hashedemail);
    }
  }

  hasuniqID(): boolean {

    return !!this.localStorage.getItem('auth_uid');

  }

}
export enum StorageType {
  LOCALSTORAGE = 'LOCALSTORAGE',
  SessionStorage = 'LOCALSTORAGE',
  Both = 'LOCALSTORAGE'
}

export enum StorageID {
  UserUniqeId = 'auth_uid',
  UserAuthToken = 'auth_token',
  UserI = 'ui',
  hashedemail = 'hashedemail',
  OpsId = 'opsId',
  Ops = 'ops',
  mixPanel = 'mixPanelId',
  mixData = 'mixData',
  Opsas = 'Opsas',
}