import { Directive } from '@angular/core';
import { FormControl } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]'
})
export class EmailValidatorDirective {

  constructor() { }

  validate(form: FormControl) {

    const emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
    if(!form.value.match(emailPattern)){
        return null;
    }
    return {form: true}
}

}
