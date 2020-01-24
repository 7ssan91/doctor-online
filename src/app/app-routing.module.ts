import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';
import { CountriesComponent } from './countries/countries.component';


const routes: Routes = [
  { path: '', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  { path: 'doctors', loadChildren: () => import('./doctorslist/doctorlist.module').then(m => m.DoctorlistPageModule) },
  { path: 'login', component: LoginComponent ,canActivate:[AuthGuard] },
  { path: 'signup', component: SignupComponent ,canActivate:[AuthGuard]},
  { path: '**', redirectTo: '' , pathMatch:'full'  },

];


const country: Routes = [
  // { path: '', redirectTo: 'en-kw' , pathMatch:'full'  },
  { path: '', component: CountriesComponent },

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
