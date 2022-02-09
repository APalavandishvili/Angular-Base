import { NgModule } from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [],
  imports: [
FontAwesomeModule
  ],
  exports:[]
})
export class IconModule {
    constructor(library: FaIconLibrary) {
        // Add an icon to the library for convenient access in other components
        library.addIcons(faCoffee);
 }
}
