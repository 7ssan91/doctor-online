import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RatingModule } from 'primeng/rating';
import { FilterComponent } from './shared/filter/filter.component';
import { LaddaModule } from 'angular2-ladda';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RatingModule,
    LaddaModule.forRoot({
      style: "zoom-in",
      spinnerSize: 40,
      spinnerColor: "white",
      spinnerLines: 12
    }),
  ],
  declarations: [FilterComponent],
  exports:[FilterComponent,LaddaModule]
})
export class AppSharedModule { }