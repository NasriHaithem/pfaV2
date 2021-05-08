import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Deals } from 'src/app/models/deals.model';
import { DealsService } from 'src/app/services/deals/deals.service';
import { MatTableDataSource} from '@angular/material/table';
import { MatSort} from '@angular/material/sort'
import {MatPaginator} from '@angular/material/paginator';
@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrls: ['./deals.component.css']
})
export class DealsComponent implements OnInit {
  displayedColumns: string[] = ['buyerId', 'beginDate', 'endDate', 'dealPrice'];
  dataSource!: MatTableDataSource<Deals>

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dealsService: DealsService) { 
    this.dataSource = new MatTableDataSource()
  }

  ngOnInit(): void {
    let owner = localStorage.getItem('user');
    let ownerId = JSON.parse(owner || '{}').id;

    this.dealsService.getUserDeals(ownerId)
      .subscribe( data => {
        this.dataSource.data = data as Deals[]
      });
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  public applyFilter = (event: Event) => {
    const target = event.target as HTMLInputElement;
    this.dataSource.filter = target.value.trim().toLocaleLowerCase();
  }

}
