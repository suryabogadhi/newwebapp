import { Component, OnInit } from '@angular/core';
import { SillserviceService } from '../../sillservice.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-skilledit',
  templateUrl: './skilledit.component.html',
  styleUrls: ['./skilledit.component.css']
})
export class SkilleditComponent implements OnInit {

  skillid = "";

  list_name = "";
  list_skill = "";
  list_skillrate = "";
  list_skilldes = "";


  constructor(private skilleditservices:SillserviceService, private route:Router,private skillrouter:ActivatedRoute) { }

  ngOnInit() {

    this.skillrouter.params.subscribe((para:Params)=>{
      this.skillid = para['sids'];
      console.log(this.skillid);


      this.skilleditservices.editskills(this.skillid);

      this.list_name      = this.skilleditservices.editstudentskills['name'];
      this.list_skill     = this.skilleditservices.editstudentskills['skill'];
      this.list_skillrate = this.skilleditservices.editstudentskills['skillrate'];
      this.list_skilldes  = this.skilleditservices.editstudentskills['skilldes'];
     });
  }

  editingskills(){
    this.skilleditservices.reeditskills({name:this.list_name,skill:this.list_skill,skillrate:this.list_skillrate,skilldes:this.list_skilldes},this.skillid);
    this.route.navigate(['/skillist']);
  }
}
