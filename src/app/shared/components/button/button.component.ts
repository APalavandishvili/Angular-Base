import { Component, Input } from '@angular/core';

@Component({
  selector: 'button[default-button]',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: { 'class': 'common-button' }
})
export class ButtonComponent{
    @Input() buttonText: string = '';
    @Input() buttonIcon: string = '';
}
