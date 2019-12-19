import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctorslistComponent } from './doctorslist/doctorslist.component';
import { DoctorviewComponent } from './doctorview/doctorview.component';


const routes: Routes = [
  {path:'', component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'doctors', component:DoctorslistComponent},
  {path:'doctorview/:id', component:DoctorviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
