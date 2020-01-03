import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {CalendarModule} from 'primeng/calendar';
import {TabViewModule} from 'primeng/tabview';
import {FormsModule} from '@angular/forms';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextModule} from 'primeng/inputtext';
import {SidebarModule} from 'primeng/sidebar';
import { StorageService } from 'src/services/core/storage.service';
import { BaseService } from 'src/services/core/base.service';
import { LocalService } from 'src/services/core/local.service';
import { APIService } from 'src/services/core/api.service';
import { EncrypthelperService } from 'src/services/core/encrypthelper.service';
import { HomeService } from 'src/services/home/home.service';
import { CoreService } from 'src/services/core/core.service';
import { HttpErrorHandlerService } from 'src/services/core/http-error-handler.service';
import { DoctorsService } from 'src/services/doctor/doctor.service';
import { FilterComponent } from './shared/filter/filter.component';
import {RatingModule} from 'primeng/rating';
import { SpecialityService } from 'src/services/speciality/speciality.service';
import { LoginComponent } from './login/login.component';
import { UserService } from 'src/services/user/user.service';
import { SignupComponent } from './signup/signup.component';
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    TabViewModule,
    CalendarModule,
    DialogModule,
    HttpClientModule,
    CarouselModule,
    ButtonModule,DropdownModule,InputTextModule,SidebarModule
  ],
  providers: [
    StorageService,BaseService,LocalService,APIService,EncrypthelperService,HomeService,CoreService,
    HttpErrorHandlerService, DoctorsService,SpecialityService,UserService,
    { provide: 'LOCALSTORAGE', useFactory: getLocalStorage },
    { provide: 'SessionStorage', useFactory: getSessionStorage },
  ],
  exports:[
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function getLocalStorage() {
  return (typeof window !== "undefined") ? window.localStorage : null;
}

export function getSessionStorage() {
  return (typeof window !== "undefined") ? window.sessionStorage : null;
}
