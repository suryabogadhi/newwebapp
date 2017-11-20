import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  @ViewChild('myform') mynewform;
  custEmail = false;
  pass = "";
  constructor() { }

  ngOnInit() {
    console.log(this.mynewform);
  }

  // submitForm(formdata){
  //   //console.log("Submitting this form!");
  //   console.log(formdata);
  // }

  submitForm(){
    if(this.mynewform.value.email===""){
      this.custEmail = true;
    }

    //console.log(this.mynewform);
  }
  checkpass(){
    this.pass = this.mynewform.value.password
  }

}