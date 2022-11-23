import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Inquiry } from '../common/inquiry';
import { map, Observable } from 'rxjs';
import { InquiryInstruction } from '../common/inquiry-instruction';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // base url
  private baseUrl ="http://themillenniumfalcon.junhechen.com:8080/api/v1/"

  constructor(private httpClient:HttpClient) { }

  makeInquiry(inquiryInstruction:InquiryInstruction):Observable<any>{
    const type = "inquiry/"
    const searchUrl = `${this.baseUrl}${type}inquiryInstruction/`
    return this.httpClient.post<InquiryInstruction>(searchUrl,inquiryInstruction);
  }
}
