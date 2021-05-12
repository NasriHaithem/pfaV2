import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { FormControl } from '@angular/forms'
import { Observable } from 'rxjs'
import { startWith, map } from 'rxjs/operators';

export interface Task {
  name: string;
  completed: boolean;
  color: ThemePalette;
  subtasks?: Task[];
}

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  breakpoint: number = 4;
  range: string[] = ['aaa','aaab','bbbb','eebb','eeee',"zzzz","dddde","ffff","ffff","aaa","rrrr",'tttt',
                      "ssss","cccc","qqqq","gggg","qqqq","wwww","vvvvz"];
  searchText!: string;
  sideBarOpen: boolean = false;

  allComplete: boolean = false;
  task: Task = {
    name: 'Indeterminate',
    completed: false,
    color: 'primary',
    subtasks: [
      {name: 'Primary', completed: false, color: 'primary'},
      {name: 'Accent', completed: false, color: 'accent'},
      {name: 'Warn', completed: false, color: 'warn'}
    ]
  };
  constructor() { }
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().indexOf(filterValue) === 0);
  }


  
  
 

  onResize(event: any) {
    let windowWidth = event.target.innerWidth;
      if( windowWidth <= 644){
        this.breakpoint = 1
      }else if(windowWidth <= 900) {
        this.breakpoint = 2
      }else if(windowWidth <= 1146){
        this.breakpoint = 3
      }else{
        this.breakpoint = 4
      }
  }

    
  isSideBarOpen(){
    this.sideBarOpen = window.innerWidth > 644 ? true : false; 
    return this.sideBarOpen;
  }
}
