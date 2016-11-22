//from scotch.io
import { Directive, forwardRef, Attribute } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
@Directive({
    selector: '[validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
    providers: [
        { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidator), multi: true }
    ]
})
export class EqualValidator implements Validator {
    constructor( @Attribute('validateEqual') public validateEqual: string) {}

    validate(c: AbstractControl): { [key: string]: any } {
        // self value (e.g. retype password)       
        let v = c.value;        
        // control value (e.g. password)       
        let e = c.root.get('cred').get(this.validateEqual);
       // value not equal

         if (e && (v != e.value)) {            
            console.log("Value not equal "+e.value+" ? "+ v);
        }
        else{
            if(e) {
                console.log("Value equal"+e.value+" ? "+ v);
            }
        }


        if (e && v !== e.value) return {            
            validateEqual: false
        }
        return null;
    }
}