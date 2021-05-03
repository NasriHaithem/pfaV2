import { Component, OnInit } from '@angular/core';
import { AuthService} from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }
  showNavItems () {
    let x = document.getElementById("nav-items-id");
    if (x?.className === "nav-items") {
        x.className += " responsive";
    } else {
        x!.className = "nav-items";
    }
    console.log(x!.classList)
  }
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    return false;
  }
  loggedIn(){
    return this.authService.loggedIn();
  }
}