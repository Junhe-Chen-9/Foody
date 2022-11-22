import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { RegisterInstructions } from '../common/register-instructions';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  // base url
  private baseUrl ="http://localhost:8080/api/v1/registration"

  constructor(private httpClient:HttpClient,private router:Router) { }

  register(registerInstructions:RegisterInstructions){
    // makesure there is no logged in user
    sessionStorage.clear();
    this.httpClient.post<RegisterInstructions>('http://localhost:8080/api/v1/registration',registerInstructions).subscribe(
      (res) =>{
        if(res){
          console.log(res);
          
        }
        
      },
      (error) =>{
        console.log(error);
        
      }

    );
  }
  
}
