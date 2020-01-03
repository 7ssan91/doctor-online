import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DoctorslistComponent } from '../doctorslist/doctorslist.component'
import { RatingModule } from 'primeng/rating';
import { AppSharedModule } from '../appshared.module';


const routes: Routes = [
  {
    path: '',
    component: DoctorslistComponent
  },
  { path: 'search', component: DoctorslistComponent },
  { path: ':Name', loadChildren: () => import('./doctorview/doctorview.module').then(m => m.DoctorviewPageModule) },

];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RatingModule,
    AppSharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DoctorslistComponent]
})
export class DoctorlistPageModule { }