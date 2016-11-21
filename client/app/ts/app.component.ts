/// <reference path="../../../node_modules/@angular/common/index.d.ts" />
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: '/ts/app.component.html'
})
export class AppComponent {

  public registerForm: FormGroup;

  public firstnameControl: FormControl;
  public lastnameControl: FormControl;
  public cityControl: FormControl;
  public usernameControl: FormControl;
  public passwordControl: FormControl;
  public password2Control: FormControl;

  constructor(private formBuilder: FormBuilder){

  }

  public ngOnInit(){
      this._BuildForm();
  }

  _BuildForm(){
      this.registerForm = this.formBuilder.group({
      'init': this.formBuilder.group({
        'firstname': ['', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15), this.customFirstnameValidator])],
        'lastname': '',
        'city': ''
      }),
      'cred': this.formBuilder.group({
        'username': '',
        'password': 'init',
        'password2': ['', this.customPassValidator]
      })
    });   

    this.firstnameControl=<FormControl>(<FormGroup>this.registerForm.controls['init']).controls['firstname'];
    this.lastnameControl=<FormControl>(<FormGroup>this.registerForm.controls['init']).controls['lastname'];
    this.cityControl=<FormControl>(<FormGroup>this.registerForm.controls['init']).controls['city'];
    this.usernameControl=<FormControl>(<FormGroup>this.registerForm.controls['cred']).controls['username'];
    this.passwordControl=<FormControl>(<FormGroup>this.registerForm.controls['cred']).controls['password'];
    this.password2Control=<FormControl>(<FormGroup>this.registerForm.controls['cred']).controls['password2'];


    this.firstnameControl.statusChanges.subscribe((value)=>{
      console.log(value);
      //this.firstnameControl.hasError()
    }
    );
   // this.firstnameControl.valueChanges.subscribe((value)=>console.log(value));
  }

  public clickSubmit(){
   // console.log(this.firstnameControl);   
  }

  public button1Click():void{
    console.log("Promeni vrednosti");
    this.firstnameControl.setValue("vladimir");
  }

  /*public customPassValidator(fc: FormControl): { [s: string]: boolean }{
      console.log(fc.value);
      console.log(
      (<FormControl>(<FormGroup>this.registerForm.controls['cred']).controls['password']).value 
      );
      return {"neka_greska": true};
  }*/

  public customFirstnameValidator(control: FormControl):{[s:string]: boolean}{
    return { "nekagreska": true };
  }

 }