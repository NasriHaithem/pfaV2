import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { AuthService } from '../services/auth.service';
import { FlashMessagesService } from 'flash-messages-angular';
import { Router } from '@angular/router';
import {User} from '../models/users.model'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  alertType: string =''  
  user: User = {
      firstname:  '',
      lastname:  '',
      email:  '',
      phoneNumber: '',
      address: '',
      username:  '',
      password:  '',
    }
    
  
  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService
    ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = this.user;

    // Required Fields
    if(!this.validateService.validateRegister(user)) {
      this.flashMessage.show('Please fill in all fields', {timeout: 3000});
      this.alertType = 'invalid-alert';
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)) {
      this.flashMessage.show('Please use a valid email', {timeout: 3000});
      this.alertType = 'invalid-alert';
      console.log('invalid email')

      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe( data => {
    if(data.success) {
      this.flashMessage.show('You are now registered and can now login', {timeout: 3000});
      this.alertType = 'valid-alert';
      this.router.navigate(['/login']);
    } else {
      this.flashMessage.show('Something went wrong', {timeout: 3000});
      this.alertType = 'invalid-alert';
      this.router.navigate(['/register']);
    }


  });
  }
}