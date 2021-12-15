import { Component, OnInit } from '@angular/core';


export interface Employee {
  id: number;
  name: string;
  salary: number;
  age: number;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  employeeData: Employee[] = [
    {id:1, name:"Ashish", salary:15000, age:21},
    {id:2, name:"Amit", salary:23000, age:23},
    {id:3, name:"Manish", salary:35000, age:35},
    {id:4, name:"Sonal", salary:45000, age:42},
    {id:5, name:"Kritika", salary:85000, age:25},
    {id:6, name:"Ashish", salary:27000, age:26},
    {id:7, name:"Amit", salary:23000, age:29},
    {id:8, name:"Manish", salary:40000, age:32},
    {id:9, name:"Sonal", salary:45000, age:30},
    {id:10, name:"Kritika", salary:85000, age:29},
  ];

  // displayedColumns: string[] = ['id', 'name', 'salary', 'age', 'action'];

  iconsParent:any[] = ['edit', 'remove_red_eye', 'delete']

  displayedColumns: any[] =[
    {col:'id', color:"accent",type:'icon', icon: this.iconsParent},
    {col:"name", color:"primary", type:'text'},
    {col:"age", color:"warn", type:'text'},
    {col:"salary", color:"accent", type:'icon', icon: this.iconsParent},
    {col:"action", color:"primary", type:'icon', icon: this.iconsParent}
  ];

  dispColumns: any[] = this.displayedColumns.map(col => col.col);
  dataSourceParent:any = this.employeeData;

  constructor() { }

  ngOnInit(): void {
  }

}
