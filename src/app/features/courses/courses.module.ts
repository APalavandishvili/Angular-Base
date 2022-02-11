import { NgModule } from "@angular/core";
import { SharedModule } from "src/app/shared/shared.module";
import { CourseComponent } from "../course/course.component";
import { CoursesComponent } from "./courses.component";

@NgModule({
    declarations: [
        CoursesComponent,CourseComponent
    ],
    imports: [
SharedModule
    ],
    exports:[
        ]
  })
  export class CoursesModule { }
