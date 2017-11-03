import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute,Params} from '@angular/router';
import { OneserviceService } from '../oneservice.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {


  name = "";
  email = "";
  password = "";
  role = "";
  
  courseid = "";
  coursename = "";
  coursefee = "";

  coursepaid = "";
  coursejoin = "";
  courseresult = "";

  constructor(private router:Router, private routepaths:ActivatedRoute, private servicevariables:OneserviceService) { }

  ngOnInit() {
   this.courseid = this.routepaths.snapshot.params['cid'];
   this.coursename = this.routepaths.snapshot.params['cname'];
   this.coursefee = this.routepaths.snapshot.params['cfee'];

   this.coursepaid = this.routepaths.snapshot.queryParams['join'];
   this.coursejoin = this.routepaths.snapshot.queryParams['paid'];

   this.courseresult = this.routepaths.snapshot.fragment;
  }
 
  submitdetails(){
    this.servicevariables.pushstudentlist({name:this.name,email:this.email,password:this.password,role:this.role});
    //console.log({name:this.name,email:this.email,password:this.password,Role:this.role});
    this.name = "";
    this.email = "";
    this.password = "";
    this.role = "";
  }






}
