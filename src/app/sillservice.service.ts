import { Injectable } from '@angular/core';

@Injectable()
export class SillserviceService {

  // viewstudentskills:object;
  // editstudentskills:object;

  skillDetails = [
    {name:"surya", skill:"Html",skillrate:8,skilldes:"dakdjbsadkjsdkjsdb asdhsadjsabdsd ksadaskjdbsa"},
    {name:"prakash", skill:"css",skillrate:6,skilldes:"dakdjbsadkjsdkjsdb asdhsadjsabdsd ksadaskjdbsa"},
    {name:"teja", skill:"php",skillrate:9,skilldes:"dakdjbsadkjsdkjsdb asdhsadjsabdsd ksadaskjdbsa"},
  ];

  constructor() { }


     addskillslist(getskill){
      this.skillDetails.push(getskill);
     }

     getSkillDetails(){
       return this.skillDetails;
     }

    // removeskilllist(rid){
    //   this.skillDetails.splice(rid-1, 1);
    // }

   //viewskills(vid){
   //  this.viewstudentskills = this.skillDetails[vid-1];
   //}

   //editskills(eid){
    //this.editstudentskills = this.skillDetails[eid-1];
   //}

   //reeditskills(reskilss,reids){
   //  console.log(reskilss);
    // this.skillDetails[reids-1] = reskilss;


   //}

   

}
