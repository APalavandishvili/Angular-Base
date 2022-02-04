import { Directive, OnInit } from '@angular/core';
import { AbstractControl, FormControl, NG_VALIDATORS, Validator } from '@angular/forms';


@Directive({
  selector: '[emailValidator]',
  providers: [
    { provide: NG_VALIDATORS, useExisting: emailValidatorDirective, multi: true }
  ]
})
export class emailValidatorDirective implements Validator, OnInit {

  ngOnInit() {
  }

  validate(form: FormControl) {

    const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    if(!form.value.match(emailPattern)){
        return null;
    }
    return {form: true}
}
}

export function customEmailValidator(control: AbstractControl){
    const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    if(!control.value.match(emailPattern)){
        return null;
    }
    return {email: true}
}
