import {EventEmitter, Injectable} from '@angular/core';
import {Subject} from "rxjs/Subject";

@Injectable()
export class OneserviceService {

  studentList = [
    {name:"surya",email:"surya@gmail.com",password:"surya",role:"ui"},
    {name:"Prakash",email:"prakash@gmail.com",password:"surya424",role:"php"},
    {name:"Raj",email:"raj@gmail.com",password:"prakash232",role:"angular"}
  ];

  //myemitFunc = new Subject();
  myemitFunc = new EventEmitter();

  constructor() { }

  pushstudentlist(newval){
     this.studentList.push(newval);
     console.log(this.studentList);
  }
  removestudentlist(getid){
    console.log(getid);
    this.studentList.splice(getid-1, 1);
    this.myemitFunc.next("Student Removed!");
  }

}
