import { Component, OnInit } from '@angular/core';
import { Userprofile } from 'src/app/common/userprofile';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  signin:Boolean = false;
  constructor() { }

  ngOnInit(): void {
    let user = JSON.parse(sessionStorage.getItem("userDetails")) as Userprofile;
    if(!user){
      this.signin = false;
    }else{
      this.signin = true;
    }
  }

}
