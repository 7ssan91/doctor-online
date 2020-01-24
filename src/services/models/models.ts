export class User {
    DoctorId?: any;
    UserName: string;
    email: string;
    Phone: string;
    FullName: string;
    IsDoctor: boolean;
}

export class LoginResponse {
    User: User;
    AccessToken: string;
}


export class Area {
    Id: number = -1;
    NameAr?: string = "";
    NameEn?: string = "";
    CityId?: number;
    SOrder?: number;
}

export class City {
    Id: number = -1;
    NameAr?: string = "";
    NameEn?: string = "";
    CountryID?: number = -1;
    SOrder?: number = 0;
    Areas?: Area[] = [];
}

export class Country {
    Id: number = -1;
    NameAr: string;
    NameEn: string;
    SiteLink: string;
    ImageLink: string;
    CurrancySymbolAr?: string;
    CurrancySymbolEn?: string;
    Code?: string;
    DecimalNumbers?: number;
    HasBranch?: boolean;
    Cities?: City[];
}

export class Specialities {
    Id: number = -1;
    NameAr?: string = "";
    NameEn?: string = "";
    DescriptionEn?: string = "";
    DescriptionAr?: string = "";
    SOrder?: number = 0;
    Icon?: string = "";

}

export class Doctor {
    NameEn: string;
    NameAr: string;
    slug: string;
    JobTitle: string;
    Address: string;
    AddressAr: string;
    AreaId: number;
    Description: string;
    DescriptionAr: string;
    Email: string;
    Id: number = -1;
    Profession: string;
    ProfileImage?: string;
    Waitingtime: string;
    Lat: string;
    Lng: string;
    RateCount: number;
    Specialities: Specialities[] = [];
    Rate?: any;
    Services: Service[] = [];
    Avilabilatiy: Avilabilatiy[] = [];
    Fees: number = 0;
    AvilabiltyType: number;
    Info: string = '';
    Hospital: Hospital = new Hospital();
    HospitalId: number = -1;
}

export class Avilabilatiy {
    Id: number;
    StartDate: Date;
    Enddate: Date;
    Slots: Slot[];
}

export class Slot {
    Name: string;
    SlotTime: string;
    Id: number;
    selected: boolean;
}

export class Service {
    NameAr: string;
    NameEn: string;
    Fees: number;
    DescriptionAr: string;
    DescriptionEn: string;
    Id: number = -1;
}

export class dateModel {
    date: any;
    NameEn: string = '';
    NameAr: string = '';
    IsAvilable?: boolean;
    DoctorId?: number;
}


export class appointments {
    NameEn: string;
    Phone: string;
    WithSlot: boolean;
    SlotName: string;
    SlotTime?: any;
    MainSlotid?: any;
    DoctorSlotId: number;
    AppointmentDate: Date;
    Id: number;
    NameAr: string;
    DoctorId: number;
    Address: string;
    AddressAr: string;
    Lat: string;
    Lng: string;
    JobTitle: string;
    ProfileImage: string;

}


export class Lappointments {
    Date: string;
    data: appointments[] = [];
}

export class BannerModel {
    imgMobEn: string;
    imgMobAr: string;
    imgar: string;
    imgen: string;
    clickID: number;
    urlar: string;
    urlen: string;
    id: number = -1;
}


export class Offer {
    StartDate: string;
    EndDate: string;
    Title: string = '';
    TitleAr: string = '';
    imgen: string = '';
    imgar: string = '';
    Info: string = '';
    Description: string = '';
    NewPrice: number = 0;
    OldPrice: number = 0;
    DoctorId: number = -1;
    Id: number = -1;
    Doctor: Doctor = new Doctor();
}

export class OfferView {
    Offer: Offer = new Offer();
    Doctor: Doctor = new Doctor();
}

export class Hospital {
    Photo: string;
    Title: string;
    TitleAr: string;
    Description: string;
    DescriptionAr: string;
    Id: number = -1;
    Type: number;
}

export class Insurance {
    Photo: string;
    Id: number = -1;
    Title: string;
    TitleAr: string;
    Description: string;
    DescriptionAr: string;
    CountryID: number;
}