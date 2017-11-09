import { Component, OnInit } from '@angular/core';
import { SillserviceService } from '../sillservice.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-skilist',
  templateUrl: './skilist.component.html',
  styleUrls: ['./skilist.component.css']
})
export class SkilistComponent implements OnInit {
  skillid = "";

  sskill = "";
  snames = "";
  srate = "";
  ssdes = "";


  skilloutedit:object;
  skill;

  constructor(private skillout:SillserviceService, private route:Router,private skillrouter:ActivatedRoute) { }

  ngOnInit() {

    this.skill = this.skillout.skillDetails;


      this.snames = this.skillrouter.snapshot.params['name'];
      this.sskill = this.skillrouter.snapshot.params['sname'];
      this.srate  = this.skillrouter.snapshot.params['srate'];
      this.ssdes  = this.skillrouter.snapshot.params['sdes'];
      if(this.snames && this.sskill && this.srate && this.ssdes){
            this.skillout.addskillslist({name:this.snames, skill:this.sskill,skillrate:this.srate ,skilldes:this.ssdes});
      } 


      this.skillrouter.params.subscribe((para:Params)=>{
        this.skillid = para['sids'];
        
          if(this.skillid){
          this.skillout.removekills(this.skillid);
          }

      });





     


    

  }







 

}

