import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { DoctorviewComponent } from './doctorview.component';
import {RatingModule} from 'primeng/rating'
import { AppSharedModule } from '../../../app/appshared.module';


const routes: Routes = [
  {
    path: '',
    component: DoctorviewComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,RatingModule,AppSharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DoctorviewComponent]
})
export class DoctorviewPageModule {}