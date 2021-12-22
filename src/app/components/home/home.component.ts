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

  iconsParent:any[] = ['edit', 'remove_red_eye', 'delete']

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
    // {id:11, name:"Ashish", salary:15000, age:21},
    // {id:12, name:"Amit", salary:23000, age:23},
    // {id:13, name:"Manish", salary:35000, age:35},
    // {id:14, name:"Sonal", salary:45000, age:42},
    // {id:15, name:"Kritika", salary:85000, age:25},
    // {id:16, name:"Ashish", salary:27000, age:26},
    // {id:17, name:"Amit", salary:23000, age:29},
    // {id:18, name:"Manish", salary:40000, age:32},
    // {id:19, name:"Sonal", salary:45000, age:30},
    // {id:20, name:"Kritika", salary:85000, age:29},
    // {id:21, name:"Ashish", salary:15000, age:21},
    // {id:22, name:"Amit", salary:23000, age:23},
    // {id:23, name:"Manish", salary:35000, age:35},
    // {id:24, name:"Sonal", salary:45000, age:42},
    // {id:25, name:"Kritika", salary:85000, age:25},
    // {id:26, name:"Ashish", salary:27000, age:26},
    // {id:27, name:"Amit", salary:23000, age:29},
    // {id:28, name:"Manish", salary:40000, age:32},
    // {id:29, name:"Sonal", salary:45000, age:30},
    // {id:30, name:"Kritika", salary:85000, age:29},
    // {id:31, name:"Ashish", salary:15000, age:21},
    // {id:32, name:"Amit", salary:23000, age:23},
    // {id:33, name:"Manish", salary:35000, age:35},
    // {id:34, name:"Sonal", salary:45000, age:42},
    // {id:35, name:"Kritika", salary:85000, age:25},
    // {id:36, name:"Ashish", salary:27000, age:26},
    // {id:37, name:"Amit", salary:23000, age:29},
    // {id:38, name:"Manish", salary:40000, age:32},
    // {id:39, name:"Sonal", salary:45000, age:30},
    // {id:40, name:"Kritika", salary:85000, age:29},
  ];

  // displayedColumns: string[] = ['id', 'name', 'salary', 'age', 'action'];


  displayedColumns: any[] =[
    {col:'id', color:"accent",type:'text', icon: this.iconsParent},
    {col:"name", color:"primary", type:'text', icon: this.iconsParent},
    {col:"age", color:"warn", type:'input', icon: this.iconsParent},
    {col:"salary", color:"primary", type:'text', icon: this.iconsParent},
    {col:"action", color:"warn", type:'icon', icon: this.iconsParent}
  ];

  // dispColumns: any[] = this.displayedColumns.map(col => col.col);
  dataSourceParent:any = this.employeeData;

  constructor() { }

  ngOnInit(): void {
  }

}
