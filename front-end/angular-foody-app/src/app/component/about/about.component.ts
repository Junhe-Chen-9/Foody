import { Component, OnInit } from '@angular/core';
import { Userprofile } from 'src/app/common/userprofile';
import { trigger, state, style, animate, transition } from '@angular/animations';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  animations: [
    trigger(
      'inOutAnimation', 
      [
        transition(
          ':enter', 
          [
            style({ opacity: 0 }),
            animate('0.2s ease-out', 
                    style({  opacity: 1 }))
          ]
        ),
        transition(
          ':leave', 
          [
            style({ opacity: 1 }),
            animate('0.2s ease-in', 
                    style({  opacity: 0 }))
          ]
        )
      ]
    )
  ],
})
export class AboutComponent implements OnInit {
  signin:Boolean = false;
  show:Boolean = false;
  constructor() { }

  ngOnInit(): void {
    let user = JSON.parse(sessionStorage.getItem("userDetails")) as Userprofile;
    if(!user){
      this.signin = false;
    }else{
      this.signin = true;
    }
  }
  opennav(){
    this.show = true;
  }
  close(){
    this.show = false;
  }
}
