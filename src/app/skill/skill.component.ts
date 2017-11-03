import { Component, OnInit } from '@angular/core';
import { SillserviceService } from '../sillservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css']
})
export class SkillComponent implements OnInit {
  

  name = "";
  skill = "";
  skillrate = "";
  skilldes = "";

  //nam = this.name;
  //skil = this.skill;
  //srate = this.skillrate;
  //sdes  = this.skilldes;

  
  constructor(private inskillservice:SillserviceService, private router:Router, private routpath:ActivatedRoute) { }

  ngOnInit() {
  }

  submitskills(){
    this.router.navigate(['/skillist',this.name,this.skill,this.skillrate,this.skilldes]);
  }



}
