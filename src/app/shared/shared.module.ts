import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { ButtonComponent } from './components/button/button.component';
import { InfoComponent } from './components/info/info.component';
import { EmailValidatorDirective } from './email-validator.directive';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [

    InfoComponent,
       ButtonComponent,
       EmailValidatorDirective,
       SearchComponent
  ],
  imports: [
    CommonModule,FontAwesomeModule
  ],
  exports:[
    CommonModule,
      ]
})
export class SharedModule {
    constructor(library: FaIconLibrary) {
        // Add an icon to the library for convenient access in other components
        library.addIcons(faCoffee);
 }
}
