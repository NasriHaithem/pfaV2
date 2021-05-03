import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../../services/announcements/announcements.service';
import { Announcements } from '../../models/announcements.model'
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  announcements: Announcements[] = [];
  constructor(private announcementService: AnnouncementsService) { }

  ngOnInit(): void {
    this.announcementService.getAnnouncements()
      .subscribe( data => {
        this.announcements = data
        console.log(data[0] )
      });
  }

}
