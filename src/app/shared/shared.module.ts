import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { InfoComponent } from './components/info/info.component';
import { ButtonComponent } from './components/button/button.component';

@NgModule({
  declarations: [
  
    InfoComponent,
       ButtonComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    CommonModule,
      ]
})
export class SharedModule { }
