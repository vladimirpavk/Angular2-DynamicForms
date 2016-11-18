/// <reference path="../../../node_modules/@angular/common/index.d.ts" />
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: '/ts/app.component.html'
})
export class AppComponent {

  public registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder){

  }

  public ngOnInit(){
    this.registerForm = this.formBuilder.group({
      'init': this.formBuilder.group({
        'firstname': ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15)])],
        'lastname': '',
        'city': ''
      }),
      'cred': this.formBuilder.group({
        'username': '',
        'password': 'init',
        'password2': ['', this.customPassValidator]
      })
    });   
  }

  public clickSubmit(){
    console.log(this.registerForm.value.cred.password2);    
  }

  public customPassValidator(fc: FormControl){
      console.log(fc.value);
      //console.log(this.registerForm.value.cred.password);
      /*if(fc.value===this.registerForm.value.cred.password2){
        //return true;
        console.log("true");
      }
      else{
        //return false;
        console.log("false");
      }*/
  }

 }