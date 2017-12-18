import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @ViewChild('myform') mynewform;
  @ViewChild('refEmail2') email2;
  custEmail = false;
  pass = "";
  emailValidate = false;
  success = false;
  myoptions = 2;

  allTechnologies =[
    {techId:100,techName:'a'},
    {techId:101,techName:'b'},
    {techId:102,techName:'c'},
    {techId:103,techName:'d'}
  ];

  user:object;
  technologies:Array<any>;

  constructor() { }

  ngOnInit() {
    this.user =  {
      technologies : []
    };

  }

  // submitForm(formdata){
  //   //console.log("Submitting this form!");
  //   console.log(formdata);
  // }

  filluptheform(){
    // this.mynewform.setValue({
    //   mygroup:{
    //     email:"kvarma063@gmail.com",
    //     password:"testing"
    //   },
    //   options:2,
    //   description:"checking",
    //   email2:"kvarma@gmail.com"
    // });

    // this.mynewform.form.setValue({
    //   mygroup:{
    //     email:"kvarma063@gmail.com",
    //     password:"testing"
    //   },
    //   options:2,
    //   description:"checking",
    //   email2:"kvarma@gmail.com"
    // });

    this.mynewform.form.patchValue({
      mygroup:{
        email:"kvarma063@gmail.com",
        password:"testing"
      },
      options:2,
      description:"checking",
      email2:"kvarma@gmail.com"
    });

    this.technologies = [
        {techId:100,techName:'a'},
        {techId:101,techName:'b'},
        {techId:103,techName:'d'}
      ];

    console.log(this.mynewform);

  }

  submitForm(){
    // if(this.mynewform.value.mygroup.email===""){
    //   this.custEmail = true;
    // }

    console.log(this.mynewform);
  }
  checkpass(){
    this.pass = this.mynewform.value.password
  }

  checkEmail(){
    //minimum letters > 5&&pattern not matched {    this.emailValidate = true; this.success = false }
    //this.emailValidate = false; this.success = true
    this.emailValidate = true;
    console.log(this.email2.value);
  }

  resetmyfrom(){
    this.mynewform.reset();
  }

  compareTech(t1, t2): boolean {
    console.log(t1.techId + '-' + t2.techId);
    console.log(t1.techId === t2.techId);
    //return t1 && t2 ? t1.techId === t2.techId : t1 === t2;
    return t1.techId === t2.techId;
  }

}
