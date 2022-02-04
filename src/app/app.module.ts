import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './features/courses/courses.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { CourseCrudComponent } from './features/course/course-crud/course-crud.component';

@NgModule({
    declarations: [AppComponent, LoginComponent, RegistrationComponent, CoursesComponent,HeaderComponent, CourseCrudComponent],
    imports: [BrowserModule, AppRoutingModule, FontAwesomeModule,FormsModule,ReactiveFormsModule],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
