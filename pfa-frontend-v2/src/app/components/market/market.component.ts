import { Component, OnInit } from '@angular/core';
import { range } from 'rxjs';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  breakpoint: number = 5;
  range: number[] = [1,1,1,1,1,1,1,1,1,1,11,11,1,1,1,1,11,1,1];

  constructor() { }



  ngOnInit(): void {
    
    let windowWidth = window.innerWidth;
    if( windowWidth <= 400){
      this.breakpoint = 1
    }else if(windowWidth <= 900) {
      this.breakpoint = 3
    }else{
      this.breakpoint = 5
    }
}

onResize(event: any) {
  let windowWidth = event.target.innerWidth;
    if( windowWidth <= 400){
      this.breakpoint = 1
    }else if(windowWidth <= 900) {
      this.breakpoint = 3
    }else{
      this.breakpoint = 5
    }
}
}
