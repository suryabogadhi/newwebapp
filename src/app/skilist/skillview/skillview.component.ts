import { Component, OnInit } from '@angular/core';
import { SillserviceService } from '../../sillservice.service';
import { ActivatedRoute, Router,Params } from '@angular/router';

@Component({
  selector: 'app-skillview',
  templateUrl: './skillview.component.html',
  styleUrls: ['./skillview.component.css']
})
export class SkillviewComponent implements OnInit {
  skillid = "";
  outview:object;

  constructor(private skillviewservices:SillserviceService, private route:Router,private skillrouter:ActivatedRoute)  { }

    ngOnInit() {
      this.skillrouter.params.subscribe((para:Params)=>{
           this.skillid = para['sids'];
           console.log(this.skillid);
           this.skillviewservices.viewskills(this.skillid);
           this.outview = this.skillviewservices.viewstudentskills;
      });
    }

}
