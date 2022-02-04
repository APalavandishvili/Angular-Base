import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { customEmailValidator } from 'src/app/shared/validators/email.validator';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit{
    form: FormGroup;

    ngOnInit(){
        this.form = new FormGroup({
            name: new FormControl('',Validators.compose([
                Validators.required,
                Validators.minLength(6)
            ])),
            email: new FormControl('',customEmailValidator),
            password: new FormControl('',Validators.required)
        });
    }

    onSubmit(registerItem){
        console.log(registerItem)
    }
}
