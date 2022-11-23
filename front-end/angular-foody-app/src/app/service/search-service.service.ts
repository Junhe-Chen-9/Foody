import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Business } from '../common/business';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchServiceService {
  // base url
  private baseUrl ="https://themillenniumfalcon.junhechen.com/api/v2/"
  // type of api call 
  

  constructor(private httpClient:HttpClient,private router:Router) { }

  searchBusinesses(address:string, radius: string) :Observable<Business[]>{
    const type = "locate/"
    const searchUrl = `${this.baseUrl}${type}find/${address}&${radius}`
    return this.httpClient.get<GetResponseBusinesses>(searchUrl).pipe(
      map(Response => Response.businesses)
    );
  }
}
interface GetResponseBusinesses{
  businesses:Business[];
}
