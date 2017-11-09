import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customdirective',
  templateUrl: './customdirective.component.html',
  styleUrls: ['./customdirective.component.css']
})
export class CustomdirectiveComponent implements OnInit {


  employesslist = [
    {name:"surya",email:"surya@gmail.com",income:20000,expenditure:8000,saving:2000,expendrate:8,savingrate:3},
    {name:"prakash",email:"prakash@gmail.com",income:30000,expenditure:9000,saving:3000,expendrate:9,savingrate:5},
    {name:"raj",email:"raj@gmail.com",income:40000,expenditure:15000,saving:4000,expendrate:7,savingrate:6},
    {name:"teja",email:"teja@gmail.com",income:50000,expenditure:20000,saving:5000,expendrate:4,savingrate:4},
    {name:"nag",email:"nag@gmail.com",income:60000,expenditure:25000,saving:6000,expendrate:6,savingrate:3},
  ];



  constructor() { }

  ngOnInit() {
  }

}
