import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service';
import { AuthService } from '../../services/auth.service';
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
      address: '',
      username:  '',
      password:  '',
      cin: ''
    }
    
  
  constructor(
    private validateService: ValidateService,
    private authService: AuthService,
    private router: Router    ) { }

  ngOnInit() {
  }

  onRegisterSubmit() {
    const user = this.user;

    // Required Fields
    if(!this.validateService.validateRegister(user)) {
      return false;
    }

    // Validate Email
    if(!this.validateService.validateEmail(user.email)) {
      console.log('invalid email')

      return false;
    }

    // Register user
    this.authService.registerUser(user).subscribe( data => {
    if(data.success) {
      console.log(data.success)
      console.log("worked")

      this.router.navigate(['/login']);
    } else {
      console.log(data.success)
      console.log("failed")

      this.router.navigate(['/register']);
    }


  });
  }
}