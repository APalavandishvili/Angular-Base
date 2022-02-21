import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ButtonComponent } from './components/button/button.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { IconModule } from './icon.module';

@NgModule({
  declarations: [
        InfoComponent,
        ButtonComponent,
        EmailValidatorDirective,
        SearchComponent
  ],
  imports: [
    CommonModule,
    IconModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CommonModule,
    IconModule
      ]
})
export class SharedModule {
}
