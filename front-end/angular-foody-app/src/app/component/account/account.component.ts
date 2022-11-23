import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Userprofile } from 'src/app/common/userprofile';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user:Userprofile;

  constructor(private auth:AuthService,private router:Router) { }

  ngOnInit(): void {
    this.user = JSON.parse(sessionStorage.getItem("userDetails")) as Userprofile;
  }
  signout(){
    this.auth.logout(sessionStorage.getItem("token"));
    sessionStorage.clear();
    // make api call to the backend to delete our session
    
    this.router.navigateByUrl('/login');
  }

}
