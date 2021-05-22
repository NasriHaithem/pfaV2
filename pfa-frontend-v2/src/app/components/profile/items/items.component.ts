import { Component, OnInit} from '@angular/core';
import { Announcements } from 'src/app/models/announcements.model';
import { AnnouncementsService} from '../../../services/announcements/announcements.service'

 @Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  ownerId: string
  tableCols = ['title', 'sqm', 'type_lodgment', 'type_ann', 'price']
  tableData: Announcements[];
  constructor(private announcementsService: AnnouncementsService) {}

  ngOnInit(): void {
    this.ownerId = JSON.parse(localStorage.getItem('user')).id;
    this.announcementsService.getMyAnnouncements(this.ownerId).subscribe( (data) =>  this.tableData = data ) 
  }

}

