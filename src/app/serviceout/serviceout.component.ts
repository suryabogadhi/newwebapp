import { Component, OnInit } from '@angular/core';
import { OneserviceService } from '../oneservice.service';

@Component({
  selector: 'app-serviceout',
  templateUrl: './serviceout.component.html',
  styleUrls: ['./serviceout.component.css']
})
export class ServiceoutComponent implements OnInit {
  studenttotal = [];
  constructor(private serviceoutvalue:OneserviceService) { }

  ngOnInit() {
    this.studenttotal = this.serviceoutvalue.studentList;
  }

  removelist(ids){
   
   this.serviceoutvalue.removestudentlist(ids);
  }

}
