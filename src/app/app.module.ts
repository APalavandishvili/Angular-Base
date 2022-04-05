import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule, customRouting } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseCrudComponent } from './features/course/course-crud/course-crud.component';
import { CoursesComponent } from './features/courses/courses.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { HeaderComponent } from './shared/components/header/header.component';
import {HttpClientModule} from '@angular/common/http'

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent,
        CoursesComponent,
        HeaderComponent,
        CourseCrudComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        customRouting,
        HttpClientModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
