export enum storageKeys {
    Lang = 'Lang',
    UniqueId = 'UniqueId',
    authToken = 'authToken',
    userInformation='userInformation',
    area='area',
    country='Country',
  }
  
  export enum locals {
    en = 'en',
    ar = 'ar'
  }
  
  export enum Lang {
    English = 0,
    Arabic = 1
  }
  export interface ILocalString {
    valar: string,
    valen: string,
  }
  
  export interface ILocale {
    code: string;
    text: string;
    Url: string;
  }
  
  export declare type CuHttpHeaders = {
    "Content-Type": string;
    Accept?: string,
    'Access-Control-Allow-Origin'?: string,
    "Authorization": string;
    "device": string;
    "version": string;
    "userToken"?: string;
    "uniqID"?: string;
    "lang": string;
    "countryId": string;
  } & {
    [prop: string]: any;
  };
  
  export enum ServerMode {
    Local,
    Live,
    Beta
  }
  
  
  export class APIResult<T>
  {
    IsSucsess: boolean = false;
    Message: string = '';
    Result: T;
    ExeptionMessage: string = '';
    Extra:any;
  
  }
 