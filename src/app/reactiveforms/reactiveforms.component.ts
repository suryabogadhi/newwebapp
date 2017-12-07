import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, FormGroupName, Validators} from "@angular/forms";

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  registerForm: FormGroup;
  myemail: string;

  constructor() { }

  ngOnInit() {
    this.registerForm = new FormGroup({
      'logindata': new FormGroup({
        'email': new FormControl('surya@gmail.com', [Validators.required, Validators.email]),
        'password': new FormControl(null, Validators.required),
      }, Validators.required),
      'gender': new FormControl('male', Validators.required),
      'description': new FormControl(null, Validators.required)
    });
  }

  autofillForm(){
    this.registerForm.patchValue({
      'logindata':{
        'email':'kvarma@gmail.com',
        'password':'asdasd',
      },

      'gender':'male',
      'description':'this is a sample text'
    })
  }

  submitForm(){
    console.log(this.registerForm);
    // console.log(this.registerForm.controls.description.valid);
  }

  resetForm(){
    this.registerForm.reset();
  }

  showemail(){

      this.myemail = this.registerForm.value.logindata.email;
  }

}
