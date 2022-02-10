import { ChangeDetectionStrategy, Component } from '@angular/core';
import coursesList from 'src/mock.json';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent{
    courseMockList = coursesList;

    trackById(index, course){
        return course;
    }
}
