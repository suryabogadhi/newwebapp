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

  constructor() { }

  ngOnInit() {
    console.log(this.mynewform);
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

    this.mynewform.form.setValue({
      mygroup:{
        email:"kvarma063@gmail.com",
        password:"testing"
      },
      options:2,
      description:"checking",
      email2:"kvarma@gmail.com"
    });

    // this.mynewform.form.patchValue({
    //   mygroup:{
    //     email:"kvarma063@gmail.com",
    //     password:"testing"
    //   }
    // });
  }

  submitForm(){
    if(this.mynewform.value.mygroup.email===""){
      this.custEmail = true;
    }

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

}