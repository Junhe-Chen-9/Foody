import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Userprofile } from '../common/userprofile';


@Injectable({
  providedIn: 'root'
})
export class AuthService {password
  authenticated:Subject<boolean> = new BehaviorSubject<boolean>(false);
  sessionId: any = "";
  userprofile:Subject<Userprofile> = new Subject<Userprofile>();



  constructor(private http: HttpClient) {
  }

    authenticate(credentials,error,router){
        
        const usernamePassword = window.btoa(credentials.username + ':' + credentials.password);
        
        this.http.post<any>('https://themillenniumfalcon.junhechen.com/api/v1/login', usernamePassword).subscribe(
            (res) => {
            if(res) {
                this.sessionId = res.sessionId;
                let user = new Userprofile();
                user.state = res.state;
                user.city = res.city;
                user.firstName = res.firstName;
                user.lastNameInit = res.lastNameInit;
                user.memberSince = res.memberSince;
                user.street = res.street;
                user.zipCode = res.zipCode;
                user.displayName = res.displayName;
                this.userprofile.next(user);
                sessionStorage.setItem(
                    'token',
                    this.sessionId
                );
                sessionStorage.setItem('userDetails',JSON.stringify(user)); // store the user details
                this.authenticated.next(true);
                
                router.navigateByUrl('/about/dashboard');
                
            }
            },
            (error) =>{
                error = true;
                console.log('error');
            }

        );
    }

    logout(sessionId:String){
        this.http.post<any>('https://themillenniumfalcon.junhechen.com/api/v1/logout',sessionId).subscribe(
            (res) => {
                if(res) {
                    alert("see you again");
                    console.log("signout sucessfully");
                }
            },
            (error) =>{
                // alert
                console.log("we have encountered a issue");
            }
        );
    }
}



