import { Component, OnInit } from '@angular/core';
import { Deals } from 'src/app/models/deals.model';
import { User } from 'src/app/models/users.model';
import { DealsService } from 'src/app/services/deals/deals.service';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
  deals: Deals[] = [];
  buyers: User[] = [];
  
  constructor(private dealsService: DealsService) { }

  ngOnInit(): void {
    let owner = localStorage.getItem('user');
    let ownerId = JSON.parse(owner || '{}').id;

    this.dealsService.getUserDeals(ownerId)
      .subscribe( data => this.deals = data);


    setTimeout(() => {
      console.log("after 5sec:")
      this.fillingBuyersArray()
    }, 5000);
    
  }

  fillingBuyersArray(){
    this.deals.forEach(deal => {
      this.dealsService.getBuyerInfo(deal.buyerId)
      .subscribe( data => this.buyers.push(data))
    });

    
    console.log(this.buyers)
  }


}
