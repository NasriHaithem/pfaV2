import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router: Router,
              private authService: AuthService
              ) { }

  ngOnInit(): void {
  }
   toggleMenu(){
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    navigation?.classList.toggle('active');
    toggle?.classList.toggle('active');
  }

  deals(){
    this.router.navigate(['deals'], {relativeTo:this.route});
  }
  
  onLogout() {
    this.authService.logout();
    this.router.navigate(['/login']);
    return false;
  }
}
