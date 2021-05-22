
import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

 @Component({
  selector: 'app-mytable',
  templateUrl: './mytable.component.html',
  styleUrls: ['./mytable.component.css']
})
export class MytableComponent implements OnInit {
  tableDataSrc: any;

  @Input('tableColumns') tableCols: string[];
  @Input() tableData: {}[] = []
  

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor() { }

  ngOnInit(): void {
    this.tableDataSrc = new MatTableDataSource(this.tableData);
    this.tableDataSrc.paginator = this.paginator;
    this.tableDataSrc.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSrc.filter = filterValue.trim().toLowerCase();

    if (this.tableDataSrc.paginator) {
      this.tableDataSrc.paginator.firstPage();
    }
  }
}

