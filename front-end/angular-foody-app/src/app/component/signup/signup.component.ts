import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RegisterInstructions } from 'src/app/common/register-instructions';
import { RegisterService } from 'src/app/service/register.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  registerFromGroup: FormGroup;
  
  constructor(private formBuilder: FormBuilder,private registerService:RegisterService,private dialog: MatDialog) { }

  ngOnInit(): void {
    this.registerFromGroup = this.formBuilder.group({
      firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
      email: new FormControl('', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$')]),
      //  // regular expression here to get right input
      //  // language accepted per class 310 is letter and digit and @ symbol and any letter and digits and . and 2-5 letter for domain extension
      //  [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,5}$')]
      // ),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(5)]),
      displayName: new FormControl(''),
      street: new FormControl(''),
      city: new FormControl(''),
      state: new FormControl(''),
      zipCode: new FormControl('')

    });
  }

  get firstName(){
    return this.registerFromGroup.get('appuser.firstName');
  }
  get lastName(){
    return this.registerFromGroup.get('appuser.lastName');
  }

  get email() {
    return this.registerFromGroup.get('email');
  }

  get password() {
    return this.registerFromGroup.get('password');
  }

  onSubmit(){
    
    // making sure the everything is valid
    
    // if(this.registerFromGroup.invalid){
    
      // not not 
    //   e.preventDefault();
    //   this.registerFromGroup.markAllAsTouched();
    //   return;
    // }
    

    let registerInstructions = new RegisterInstructions();
    //registerInstructions.firstName = this.registerFromGroup.get('appuser').value;
    registerInstructions = this.registerFromGroup.value;
    registerInstructions.lastNameInit = registerInstructions.lastName.charAt(0).toUpperCase().concat(".");
    registerInstructions.memberSince = new Date();
    this.registerService.register(registerInstructions);
    this.openDialog();
  }
  openDialog() {
    this.dialog.open(ModalComponent);
  }
}
