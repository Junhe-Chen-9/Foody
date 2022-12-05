import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './component/homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { HeaderComponent } from './component/header/header.component';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { LoginComponent } from './component/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RequestInterceptor } from './interceptor/request.interceptor';
import { SignupComponent } from './component/signup/signup.component';
import { AccountComponent } from './component/account/account.component';
import { ModalComponent } from './component/modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DashboardComponent } from './component/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    SignupComponent,
    AccountComponent,
    ModalComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatDialogModule,    
    
  ],
  providers: [ 
    {
      provide:HTTP_INTERCEPTORS,useClass:RequestInterceptor,multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
