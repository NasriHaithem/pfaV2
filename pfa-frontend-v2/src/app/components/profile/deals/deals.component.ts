import { Component, OnInit } from '@angular/core';
import { Deals } from 'src/app/models/deals.model';
import { User } from 'src/app/models/users.model';
import { UsersService } from 'src/app/services/users/users.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
  ownerId: string
  tableCols = ['buyerFirstname', 'buyerLastname', 'buyerPhoneNumber', 'beginDate', 'duration', 'dealPrice']
  tableData: any[];
  constructor(private userSerive: UsersService) { }

  ngOnInit(): void {
    this.ownerId = JSON.parse(localStorage.getItem('user')).id;
    this.userSerive.getMyDeals(this.ownerId).subscribe( (data) =>  {this.tableData = data; console.log(data)} ) 

  }
  
}