import { Injectable } from '@angular/core';

@Injectable()
export class OneserviceService {

  studentList = [
    {name:"surya",email:"surya@gmail.com",password:"surya",role:"ui"},
    {name:"Prakash",email:"prakash@gmail.com",password:"surya424",role:"php"},
    {name:"Raj",email:"raj@gmail.com",password:"prakash232",role:"angular"}
  ];
  constructor() { }

  pushstudentlist(newval){
     this.studentList.push(newval);
     console.log(this.studentList);
  }
  removestudentlist(getid){
    console.log(getid);
    this.studentList.splice(getid-1, 1);
  }

}
