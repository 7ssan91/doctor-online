import { Injectable, Inject } from "@angular/core";
import { storageKeys, ILocale } from "./enums";
import { EncrypthelperService } from "./encrypthelper.service";
import { Area, User } from "../models/models";

@Injectable()
export class StorageService {
  className = "StorageService";

  constructor(
    @Inject("LOCALSTORAGE") private localStorage: any,
    @Inject("SessionStorage") private sessionStorage: any,
    public enc: EncrypthelperService
  ) {}

  set(Id: storageKeys, Data: any, encrypt: boolean = true) {
    if (encrypt) {
      Data = this.enc.encrypt(Data);
    }
    this.localStorage.setItem(Id, Data);
  }

  get(Id: storageKeys, decrypt: boolean = true): any {
    let Data: any = "";
    if (!!this.localStorage.getItem(Id)) {
      Data = this.localStorage.getItem(Id);
      if (decrypt) {
        Data = this.enc.decrypt(Data);
      }
    } else if (!!this.sessionStorage.getItem(Id)) {
      Data = this.sessionStorage.getItem(Id);
      if (decrypt) {
        Data = this.enc.decrypt(Data);
      }
    }

    return Data;
  }

  getArea() {
    var are: Area = new Area();
    if (!!this.get(storageKeys.area, false))
      are = JSON.parse(this.get(storageKeys.area, true));
    return are;
  }

  getUserInformation() {
    var are: User = new User();
    if (!!this.get(storageKeys.userInformation, false))
      are = JSON.parse(this.get(storageKeys.userInformation, true));
    return are;
  }

  getAuthtoken() {
    var bak: string = "";
    if (!!this.get(storageKeys.authToken, false))
      bak = this.get(storageKeys.authToken, true);
    return bak;
  }

  isLoggedIn() {
    return this.getAuthtoken() != "";
  }

  getuniqID() {
    var bak: string = "";
    if (!!this.get(storageKeys.UniqueId, false))
      bak = this.get(storageKeys.UniqueId, false);
    return bak;
  }

  delete(storageKeys: storageKeys) {
    return this.localStorage.remove(storageKeys).then(
      data => {
        return data;
      },
      error => console.error(error)
    );
  }

  isRememberMe(): boolean {
    if (!!localStorage.getItem("auth_token")) {
      return true;
    } else if (!!sessionStorage.getItem("auth_token")) {
      return false;
    } else {
      return false;
    }
  }

  removeAllStorage() {
    if (!!localStorage.getItem(storageKeys.authToken)) {
      localStorage.removeItem(storageKeys.userInformation);
      localStorage.removeItem(storageKeys.authToken);

    } 
  }

  hasuniqID(): boolean {
    return !!this.localStorage.getItem("auth_uid");
  }
}
export enum StorageType {
  LOCALSTORAGE = "LOCALSTORAGE",
  SessionStorage = "LOCALSTORAGE",
  Both = "LOCALSTORAGE"
}
