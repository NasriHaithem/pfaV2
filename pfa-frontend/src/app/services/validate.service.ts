import { Injectable } from '@angular/core';
import { User } from '../models/users.model';
@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }
  validateRegister(user : User) {
    if( user.firstname == undefined ||
        user.lastname == undefined ||
        user.email == undefined || 
        user.phoneNumber == undefined ||
        user.address == undefined ||
        user.username == undefined ||
        user.password == undefined ) {
        return false;
    } else {
      return true;
    }
  }

  validateEmail(email : string) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }
}
