import { Component, OnInit } from '@angular/core';
import { AnnouncementsService } from '../../services/announcements/announcements.service';
import { Announcements } from '../../models/announcements.model'
import { Router } from '@angular/router';
@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {
  announcements: Announcements[] = [];
  constructor(private announcementService: AnnouncementsService, private route: Router) { }

  ngOnInit(): void {
    this.announcementService.getAnnouncements()
      .subscribe( data => this.announcements = data);
  }

  viewItem(announcement: any){

    this.route.navigate(['/market', announcement._id])

  }
}
