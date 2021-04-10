
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

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
}