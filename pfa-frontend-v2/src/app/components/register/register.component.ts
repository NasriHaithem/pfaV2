

import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service.service';
import { AuthService } from '../../services/auth.service.service';
import { Router } from '@angular/router';
import {User} from '../../models/users.model'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: User = {
    firstname:  '',
    lastname:  '',
    email:  '',
    phoneNumber: '',
    city: '',
    state: '',
    username:  '',
    password:  '',
  };
    
  
  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router    ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = this.user;
    console.log(user)
    // Required Fields
    if(!this.validateService.validateRegister(user)) {
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)) {
      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe( data => {
    if(data.success) {
      this.router.navigate(['/signin']);
    }else {
      this.router.navigate(['/signup']);
      console.log("failed")
    }


  });
  }
}
