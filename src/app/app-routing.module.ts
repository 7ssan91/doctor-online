import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctorslistComponent } from './doctorslist/doctorslist.component';
import { DoctorviewComponent } from './doctorview/doctorview.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'doctors', component:DoctorslistComponent},
  {path:'doctorview/:id', component:DoctorviewComponent},
  {path:'search',component:DoctorslistComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:SignupComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
