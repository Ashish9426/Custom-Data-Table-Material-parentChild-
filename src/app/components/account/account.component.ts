import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  @Input() dataSourceChild: any;
  @Input() colHeaderChild: any;

  dispColumns: any[] 
  dataSource: any;

  

  constructor() { }

  ngOnInit(): void {
  this.dispColumns = this.colHeaderChild.map(col=> col.col);
  this.dataSource = new MatTableDataSource(this.dataSourceChild);
  console.log(this.dataSource.data)

  // console.log(this.dispColumns)
  // console.log(this.colHeaderChild)
  // for(var i=0; i<this.colHeaderChild.length; i++){
  //   console.log(this.colHeaderChild[i].col)
  //   console.log(this.colHeaderChild[i].color)
  // }
}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
