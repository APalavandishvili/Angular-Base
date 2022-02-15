import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { InfoComponent } from './components/info/info.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { SearchComponent } from './components/search/search.component';
import { IconModule } from './icon.module';

@NgModule({
  declarations: [
    InfoComponent,
       ButtonComponent,
       EmailValidatorDirective,
       SearchComponent
  ],
  imports: [
    CommonModule,IconModule
  ],
  exports:[
    CommonModule,
    IconModule
      ]
})
export class SharedModule {
}
