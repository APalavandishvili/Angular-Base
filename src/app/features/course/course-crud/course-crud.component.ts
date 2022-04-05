import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'courseCrud',
  templateUrl: './course-crud.component.html',
  styleUrls: ['./course-crud.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CourseCrudComponent implements OnInit {
    form: FormGroup;
    authorArray = new FormArray([
        new FormControl('Nancy',),
        new FormControl('Drew'),
      ]);
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.form = this.formBuilder.group({
        title: this.formBuilder.control('',Validators.required),
        description: this.formBuilder.control('',Validators.required),
        authorName: this.formBuilder.control(''),
        courseDuration: this.formBuilder.control('',Validators.compose([
            Validators.required,
            Validators.min(0)
        ])),

    });
  }


}
