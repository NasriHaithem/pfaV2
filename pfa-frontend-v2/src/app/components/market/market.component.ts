import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import { AnnouncementsService } from 'src/app/services/announcements/announcements.service';
import { Announcements } from 'src/app/models/announcements.model';

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
  searchText!: string;
  announcements: Announcements[]

  constructor(private announcementService: AnnouncementsService) { }

  ngOnInit() {
    this.announcementService.getAnnouncements()
    .subscribe( data => this.announcements = data);
  }

  cropDescription(description: string)
  {
    const dots = "...";
    if(description.length > 250)
    {
      // you can also use substr instead of substring
      description = description.substring(0,250) + dots;
    }

      return description;
  }
}
