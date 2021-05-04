import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnnouncementsService} from '../../services/announcements/announcements.service';
import { Announcements } from '../../models/announcements.model'
@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {
  announcement: Announcements = {
    _id:  "",
    ownerId: "",
    type:  "",
    availability:  true,
    address: "",
    price: "",
    imageUrl:  "",
    uploaded:  "",
  }
  constructor(private route: ActivatedRoute, private announcementService: AnnouncementsService) { }

  ngOnInit(): void {
    var id = this.route.snapshot.params.id;
    this.announcementService.getOneAnnouncement(id)
      .subscribe( data => this.announcement = data)
  }


}
