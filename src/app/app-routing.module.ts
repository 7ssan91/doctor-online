import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DoctorslistComponent } from './doctorslist/doctorslist.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'doctors', loadChildren: () => import('./doctorslist/doctorlist.module').then(m => m.DoctorlistPageModule) },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: '**', redirectTo: '' , pathMatch:'full'  },
];


const country: Routes = [
  { path: '', redirectTo: 'en-kw' , pathMatch:'full'  },
  { path: 'ar-kw', children: routes },
  { path: 'en-kw', children: routes },

  { path: 'ar-eg', children: routes },
  { path: 'en-eg', children: routes },

  { path: '**', redirectTo: 'en-kw' , pathMatch:'full' },
];



@NgModule({
  imports: [RouterModule.forRoot(country)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
