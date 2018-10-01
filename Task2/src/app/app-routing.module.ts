import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {SignUpComponent } from './sign-up/sign-up.component';
import {HomeComponent } from './home/home.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

const routes: Routes = [
 { path: '', redirectTo: '/home', pathMatch: 'full' },
   { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'search', component: SearchBarComponent },
    { path: 'SignUp', component: SignUpComponent}

];

@NgModule({
   imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
