/// <reference path="../../../node_modules/@angular/common/index.d.ts" />

export class User{   
        
        public firstname: string;
        public lastname: string;
        public city: string;

        public username: string;
        public password: string;
        public password2: string;    

    constructor(firstname: string, lastname: string, city:string,
        username: string, password: string, password2: string){
            this.firstname=firstname;
            this.lastname= lastname;
            this.city= city;

            this.username= username;
            this.password= password;
            this.password2= password2;
        }        
}