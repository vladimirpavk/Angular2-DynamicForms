/// <reference path="../../../node_modules/@angular/common/index.d.ts" />
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { User } from './user';

@Component({
  selector: 'my-app',
  templateUrl: '/ts/app.component.html'
})
export class AppComponent {

  public registerForm: FormGroup;

  public initControl: FormGroup;
  public firstnameControl: FormControl;
  public lastnameControl: FormControl;
  public cityControl: FormControl;
  public credcontrol: FormGroup;
  public usernameControl: FormControl;
  public passwordControl: FormControl;
  public password2Control: FormControl;

  public user: User;

  constructor(private formBuilder: FormBuilder){

  }

  public ngOnInit(){
      this._BuildForm();
      this.user=new User("Vladimir", "Pavkovic", "Bor", "vladimirpavk", "observer", "observer");
  }

  _BuildForm(){

    //prepravi ovo bez FormBuildera, može biti jednostavnije
      /*this.registerForm = this.formBuilder.group({
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
    */
  
    this.firstnameControl=new FormControl('', Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15), this.customFirstnameValidator]));
    this.lastnameControl=new FormControl();
    this.cityControl=new FormControl();
    this.initControl=new FormGroup({
      "firstname": this.firstnameControl,
      "lastname": this.lastnameControl,
      "city": this.cityControl
    });
    
    this.usernameControl=new FormControl();
    this.passwordControl=new FormControl();
    this.password2Control=new FormControl();
    this.credcontrol=new FormGroup({
      "username": this.usernameControl,
      "password": this.passwordControl,
      "password2": this.password2Control
    });

    this.registerForm=new FormGroup({
      "init": this.initControl,
      "cred": this.credcontrol
    });


    this.firstnameControl.statusChanges.subscribe((value)=>{
      console.log(value);  
      }
    );  
  }

  public clickSubmit(){
   // console.log(this.firstnameControl);   
  }

  public button1Click():void{
    console.log("Promeni vrednosti");
    this.firstnameControl.setValue("vladimirko");
    console.log(JSON.stringify(this.user));

    this.user=new User("natasa", "pavkovic", "bor", "natasap", "pile123", "pile123");
  }

  public customFirstnameValidator(control: FormControl):{[s:string]: boolean}{   
    return { 
      "nekagreska": false,
      "drugagreska": false
   };
   //ili vratis null
  }

 }