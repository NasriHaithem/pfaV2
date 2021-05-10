import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleMenu(){
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    navigation?.classList.toggle('active');
    toggle?.classList.toggle('active');
  }
}
