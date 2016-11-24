# Dynamic forms - two way binding with ngModel with custom attribute validator

Two way databinding from model to view and vice-vera with use of ngModel directive.

In this example model is class User. Template form is bind through formControlName and formGroupName and this is used as an interface for changing the value to a form.
When changes to the value of a specific FormControl is made these changes are applied to the template form. This is one-way binding
from model to a view. 

When changes to the view happen changes to the model are auto applied because of the [(ngMode)] directive.

# Custom validator
Custom validator is used in the template with the following syntax
```
  <input type="text" formControlName="password2" validateEqual="password">
```
Implementation of this validator is an adjusted example from scotch.io.

# Tools
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