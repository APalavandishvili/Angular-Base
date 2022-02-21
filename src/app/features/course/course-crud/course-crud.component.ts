import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

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
  constructor() { }

  ngOnInit(){
    this.form = new FormGroup({
        title: new FormControl('',Validators.required),
        description: new FormControl('',Validators.required),
        authorName: new FormControl(''),
        courseDuration: new FormControl('',Validators.compose([
            Validators.required,
            Validators.min(0)
        ])),

    });
  }


}