import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { AccountComponent } from './component/account/account.component';
import { ContactComponent } from './component/contact/contact.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { LoginComponent } from './component/login/login.component';
import { SignupComponent } from './component/signup/signup.component';
import { VisitHistoryComponent } from './component/visit-history/visit-history.component';
import { AuthenticationGuard } from './guard/authentication.guard';

const routes: Routes = [
  
  // now lets set the guard at the begining 
  {path:'',canActivate:[AuthenticationGuard],children:[
    {path: 'about', component: AboutComponent},
    {path: 'login', component: LoginComponent},
    {path: 'explore', component: HomepageComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'signup', component:SignupComponent},
  ]},
  // routing inside account page
  { path: 'account', component: AccountComponent, children:[
    { path: 'dashboard', component:  DashboardComponent },
    { path: 'visited', component: VisitHistoryComponent },
  ] },
  // by defualt we should be route to homepage
  {path:'account',component:AccountComponent},
  {path: '**', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
