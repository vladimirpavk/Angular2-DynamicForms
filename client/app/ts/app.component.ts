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
      this.user=new User("Vladimir", "Pavkovic", "Bor", "vladimirpavk", "observer", "observer");
      this._BuildForm();
 
  }

  _BuildForm(){

    this.firstnameControl=new FormControl(this.user.firstname, Validators.compose([Validators.required, Validators.minLength(6), Validators.maxLength(15), this.customFirstnameValidator]));
    this.lastnameControl=new FormControl(this.user.lastname);
    this.cityControl=new FormControl(this.user.city);
    this.initControl=new FormGroup({
      "firstname": this.firstnameControl,
      "lastname": this.lastnameControl,
      "city": this.cityControl
    });
    
    this.usernameControl=new FormControl(this.user.username);
    this.passwordControl=new FormControl(this.user.password);
    this.password2Control=new FormControl(this.user.password2);
    this.credcontrol=new FormGroup({
      "username": this.usernameControl,
      "password": this.passwordControl,
      "password2": this.password2Control
    });

    this.registerForm=new FormGroup({
      "init": this.initControl,
      "cred": this.credcontrol
    });

    this.registerForm.valueChanges.subscribe((value)=>{
      this.user.firstname=value['init']['firstname'];
      this.user.lastname=value['init']['lastname'];
      this.user.city=value['init']['city'];
      this.user.username=value['cred']['username'];
      this.user.password=value['cred']['password'];
      this.user.password2=value['cred']['password2'];
      
      console.log(JSON.stringify(this.user));         
    });       
  }

  //call when model changes - > view
 // public changeView(model: User){
   public changeView(){
    this.firstnameControl.setValue(this.user.firstname, { onlySelf: true});
    this.lastnameControl.setValue(this.user.lastname, { onlySelf: true});
    this.cityControl.setValue(this.user.city, { onlySelf: true});

    this.usernameControl.setValue(this.user.username, { onlySelf: true});
    this.passwordControl.setValue(this.user.password, { onlySelf: true});
    this.password2Control.setValue(this.user.password2, { onlySelf: true});
  }

  public clickSubmit(){
   // console.log(this.firstnameControl);   
  }

  public button1Click():void{
    /*console.log("Promeni vrednosti");
    this.firstnameControl.setValue("vladimirko");
    console.log(JSON.stringify(this.user));*/

    this.user=new User("natasa", "pavkovic", "bor", "natasap", "pile123", "pile123");
    console.log(JSON.stringify(this.user));
    this.changeView();
  }

  public customFirstnameValidator(control: FormControl):{[s:string]: boolean}{   
    return { 
      "nekagreska": false,
      "drugagreska": false
   };
   //ili vratis null
  }

 }