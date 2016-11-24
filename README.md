# Dynamic forms - no_ngModel branch
Two way databinding from model to view and vice-vera without you of ngModel directive. You must maintain changes on you own.

In this example model is class User. Template form is bind through **formControlName** and **formGroupName** and this is used
as an interface for changing the value to a form. 

You use changeView() method when you make changes to the model to apply this changes to a view
```
 public changeView(){
    this.firstnameControl.setValue(this.user.firstname, { onlySelf: true});
    this.lastnameControl.setValue(this.user.lastname, { onlySelf: true});
    this.cityControl.setValue(this.user.city, { onlySelf: true});

    this.usernameControl.setValue(this.user.username, { onlySelf: true});
    this.passwordControl.setValue(this.user.password, { onlySelf: true});
    this.password2Control.setValue(this.user.password2, { onlySelf: true});
  }
```

When a change in the view is made then the model is synchronized becoused we are subscribed to a valueChanges event, or 
we can you ngOnViewChange

```
 this.registerForm.valueChanges.subscribe((value)=>{
      this.user.firstname=value['init']['firstname'];
      this.user.lastname=value['init']['lastname'];
      this.user.city=value['init']['city'];
      this.user.username=value['cred']['username'];
      this.user.password=value['cred']['password'];
      this.user.password2=value['cred']['password2'];                
    });       
```

###Tools
Node, Express, TypeScript, Gulp, BrowserSync, Angular2 application skeleton.

Provided for developing **Angular2** applications using **Typescript** served over **node-express** server.

### Prerequisites
Must have node and npm installed

### How to use
Install node dependencies in your project root directory (this is where the 'package.json' file is located) using:
```sh
$ npm install
``` 
Install typescript definitions using:
```sh
$ typings install
```

Start application with 
```sh
$ gulp
```

Application will be initialy compiled and started. By default the server is listening on port 3036. Browser synchronization is configured in proxy mode. Client application (Angular2) can be accessed through your web browser on the following url **localhost:3036/angular**. If everything is ok you should see the message *"My Second Angular App"*. displayed in your browser.

### Under the hood

**Server application** in *typescript* is located in **./server/ts** files folder. 

Folder **./server/js** contains transpiled server application and is populated by gulp build system. Folder contains files needed for deployment. Server application is compiled whenever you make changes to any file in **./server/ts** folder.

**Server application** is **node-express** web server initialy configured to listen for requests on **localhost:3036/angular**. 


**Client application** in *typescript* is located in **./client/app/ts** files folder.

Folder **./client/app/js** contains transpiled client application and is populated by gulp build system. Folder contains files needed for deployment. Client application is compiled whenever you make changes to any file in **./client/app/ts** folder. 

Folder **./client/app/ts** contains following files

```
app.component.ts
app.module.ts
main.ts
```
taken from the official Angular2 web page quickstart https://angular.io
