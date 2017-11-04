import { Component, OnInit } from '@angular/core';
import { SillserviceService } from '../sillservice.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-skilist',
  templateUrl: './skilist.component.html',
  styleUrls: ['./skilist.component.css']
})
export class SkilistComponent implements OnInit {
  
  getid = "";
  getstatus = "";

  getid = "";
  getstatus = "";

  sskill = "";
  snames = "";
  srate = "";
  ssdes = "";

  outview:object;
  skilloutedit:object;


  list_name = "";
  list_skill = "";
  list_skillrate = "";
  list_skilldes = "";

  
  skill;

  constructor(private skillout:SillserviceService, private route:Router,private skillrouter:ActivatedRoute) { }

  ngOnInit() {

    this.skill = this.skillout.skillDetails;

   
   

      this.snames = this.skillrouter.snapshot.params['name'];
      this.sskill = this.skillrouter.snapshot.params['sname'];
      this.srate  = this.skillrouter.snapshot.params['srate'];
      this.ssdes  = this.skillrouter.snapshot.params['sdes'];
      if(this.snames){
        
      this.skillout.addskillslist({name:this.snames, skill:this.sskill,skillrate:this.srate ,skilldes:this.ssdes});
  
            } 
      this.getid = this.skillrouter.snapshot.queryParams['skilid'];
      this.getstatus = this.skillrouter.snapshot.queryParams['status'];
  

     this.skillrouter.queryParams.subscribe((queryParams:any) => {

          this.getid = queryParams.skilid;
          

        if(this.getid){

            this.getid = queryParams.skilid;
            this.getstatus = queryParams.status;
      
          
              this.skillout.viewskills(this.getid);
              this.outview = this.skillout.viewstudentskills;
            
           
           
             
              this.skillout.editskills(this.getid);
              this.skilloutedit = this.skillout.editstudentskills;
           

         
            //   this.skillout.removekills(this.getid);
            //   this.getstatus = "";
            
            
            //console.log(this.skilloutedit);
          
          this.list_name      = this.skillout.editstudentskills['name'];
          this.list_skill     = this.skillout.editstudentskills['skill'];
          this.list_skillrate = this.skillout.editstudentskills['skillrate'];
          this.list_skilldes  = this.skillout.editstudentskills['skilldes'];

        }

     });

     

        if(queryParams.skilid){
          this.getid = queryParams.skilid;
          this.getstatus = queryParams.status;

          this.skillout.viewskills(this.getid);
          this.outview = this.skillout.viewstudentskills;

          this.skillout.editskills(this.getid);
          this.skilloutedit = this.skillout.editstudentskills;


          this.list_name = this.skillout.editstudentskills['name'];
          this.list_skill = this.skillout.editstudentskills['skill'];
          this.list_skillrate = this.skillout.editstudentskills['skillrate'];
          this.list_skilldes = this.skillout.editstudentskills['skilldes'];
        }else{
          this.getstatus = "";
        }


    });






  }


 editingskills(){
    this.skillout.reeditskills({name:this.list_name,skill:this.list_skill,skillrate:this.list_skillrate,skilldes:this.list_skilldes},this.getid);
    this.route.navigate(['/skillist']);
    this.getstatus = "";
  }




 


}
