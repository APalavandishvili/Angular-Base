import { RouterModule, Routes } from '@angular/router';
import { AuthorizedGuard } from './auth/services/authorized.guard';
import { NotAuthorizedGuard } from './auth/services/not-authorized.guard';
import { CourseCrudComponent } from './features/course/course-crud/course-crud.component';
import { CoursesComponent } from './features/courses/courses.component';
import { LoginComponent } from './features/login/login.component';
import { RegistrationComponent } from './features/registration/registration.component';
import { AdminGuard } from './user/services/admin.guard';

const routes: Routes = [
    {path: 'login', component: LoginComponent, canActivate: [NotAuthorizedGuard] },
    {path: 'registration', component: RegistrationComponent, canActivate: [NotAuthorizedGuard]},
    {path: 'courses', component: CoursesComponent, canLoad:[AuthorizedGuard] },
    {path: 'course/add', component: CourseCrudComponent, canLoad:[AdminGuard] },
    {path: 'course/edit/:id', component: CourseCrudComponent, canLoad:[AdminGuard] },
    {path: '', redirectTo:'all', pathMatch:'full' }
];

export const customRouting = RouterModule.forRoot(routes);
export class AppRoutingModule {}
