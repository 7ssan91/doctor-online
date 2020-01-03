import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {HomeComponent} from './home.component'
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { CalendarModule } from 'primeng/calendar';
import {CarouselModule } from 'ngx-owl-carousel-o';
import { FilterComponent } from '../shared/filter/filter.component';



@NgModule({
  declarations: [HomeComponent,FilterComponent],
  imports: [
    CommonModule,
    FormsModule,
    DialogModule,
    DropdownModule,
    CarouselModule,
    CalendarModule,
    RouterModule.forChild([
      { path: '', component: HomeComponent },
  ])
  ]
})
export class HomeModule { }
