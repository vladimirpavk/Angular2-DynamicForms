/// <reference path="../../../node_modules/@angular/common/index.d.ts" />
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EqualValidator } from './confirm-password-validator';

@NgModule({
  imports:      [ BrowserModule, ReactiveFormsModule ],
  declarations: [ AppComponent, EqualValidator ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }