import { Component } from '@angular/core';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent{
    coursesList = mockCoursesList;

}


const mockCoursesList = [
    {
        title: 'C#',
        description: `Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since
   the 1500s, when an unknown
    printer took a galley of type and scrambled it to make
   a type specimen book. It has survived
    not only five centuries, but also the leap into
   electronic typesetting, remaining essentially u
    nchanged.`,
        creationDate: '10/10/2018',
        duration: 250,
        authors: ['Brendan Eich', 'Dzianis Davydau']
    },
    {
        title: 'C#',
        description: `Lorem Ipsum is simply dummy text of the printing and
   typesetting industry. Lorem Ipsum
    has been the industry's standard dummy text ever since
   the 1500s, when an unknown
    printer took a galley of type and scrambled it to make
   a type specimen book. It has survived
    not only five centuries, but also the leap into
   electronic typesetting, remaining essentially u
    nchanged.`,
        creationDate: '11/11/2019',
        duration: 500,
        authors: ['Someone Else', 'Someone Lecturer']
    }
]
