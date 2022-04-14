import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Course } from '../models/course/course.model';
import { CoursesService } from './courses.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesStoreService {
private defaultcourses: Course[] = [];
private isLoading$$ = new BehaviorSubject<boolean>(false);
private courses$$ = new BehaviorSubject<Course[]>(this.defaultcourses);

isLoading$ = this.isLoading$$.asObservable();
courses$ = this.courses$$.asObservable();

  constructor(private courseService: CoursesService) { }

getAll(){
    return this.courseService.getAll().subscribe();
  }

getById(name: string){
      return this.courseService.getById(name).subscribe(response => response);
  }

update(id: string, courseItem: Course){
    return this.courseService.update(id,courseItem).subscribe(response => response);
}

add(courseItem : Course){
    return this.courseService.add(courseItem).subscribe(response => response);
}

delete(id: string){
    return this.courseService.delete(id).subscribe(response => response);
}
}
