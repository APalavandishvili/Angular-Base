import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import coursesList from 'src/mock.json';
import { CourseComponent } from '../course/course.component';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit{
    constructor(private courseComponent: CourseComponent,
                private activatedRoute: ActivatedRoute){}
    ngOnInit(): void {
        this.activatedRoute.paramMap
        .subscribe();
    }

    onCourseItemAdd(courseItem: CourseComponent){
        this.courseComponent;
    }

    courseMockList = coursesList;

    trackById(index, course){
        return course;
    }
}
