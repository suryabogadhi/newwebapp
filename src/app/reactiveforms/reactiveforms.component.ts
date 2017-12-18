import { Component, OnInit } from '@angular/core';
import {FormArray, FormControl, FormGroup, FormGroupName, Validators} from "@angular/forms";
import {forEach} from "@angular/router/src/utils/collection";

@Component({
  selector: 'app-reactiveforms',
  templateUrl: './reactiveforms.component.html',
  styleUrls: ['./reactiveforms.component.css']
})
export class ReactiveformsComponent implements OnInit {

  registerForm: FormGroup;
  myemail: string;
  subjects:Array<string> = ['cse','eee','ece','mech','it','ins'];
  catarray;

  constructor() { }

  ngOnInit() {
    this.catarray = new FormArray([]);
    let temp = this;

    this.subjects.forEach(function(sub){
      temp.catarray.push(new FormControl());
    });

    this.registerForm = new FormGroup({
      'logindata': new FormGroup({
        'email': new FormControl('surya@gmail.com', [Validators.required, Validators.email]),
        'password': new FormControl(null, Validators.required),
      }, Validators.required),
      'gender': new FormControl('male', Validators.required),
      'description': new FormControl(null, Validators.required),
      'categories':this.catarray
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
      // 'categories':[
      //   'cse',
      //   null,
      //   'ece',
      //   'eee'
      // ]
    });
    for (let _i = 0; _i < this.subjects.length; _i++) {
      this.catarray.at(_i).patchValue([this.subjects[_i]]);
    }
  }


  submitForm(){
    console.log(this.registerForm);
    // console.log(this.registerForm.get('gender').valid);
    // console.log(this.registerForm.controls.description.valid);
  }

  resetForm(){
    this.registerForm.reset();
  }

  showemail(){

      this.myemail = this.registerForm.value.logindata.email;
  }

}
