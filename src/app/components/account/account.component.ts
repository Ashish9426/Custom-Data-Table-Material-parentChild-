import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  @Input() dataSourceChild: any;
  @Input() colHeaderChild: any;

  dispColumns: any[] 

  constructor() { }

  ngOnInit(): void {
  this.dispColumns = this.colHeaderChild.map(col=> col.col);

  console.log(this.dispColumns)
  console.log(this.colHeaderChild)
  

  for(var i=0; i<this.colHeaderChild.length; i++){
    console.log(this.colHeaderChild[i].col)
    console.log(this.colHeaderChild[i].color)
  }
  
  }

}
