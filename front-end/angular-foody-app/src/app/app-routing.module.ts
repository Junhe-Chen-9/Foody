import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { AccountComponent } from './component/account/account.component';
import { ContactComponent } from './component/contact/contact.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { AuthenticationGuard } from './guard/authentication.guard';

const routes: Routes = [
  // now lets set the guard at the begining 
  {path:'',canActivate:[AuthenticationGuard],children:[
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'explore', component: HomepageComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'signup', component:SignupComponent},
    {path: 'about/signup',redirectTo: '/signup', pathMatch:'full'},
    {path: 'about/login',redirectTo: '/login', pathMatch:'full'},
  ]},
  // by defualt we should be route to homepage
  {path:'account',component:AccountComponent},
  {path: '**', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
