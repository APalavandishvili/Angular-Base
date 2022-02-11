import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CourseComponent{
    @Input() title: string = '';
    @Input() text?: string;
    @Input() creationDate?: string;
    @Input() authors?: string[];
    @Input() duration?: number;
}
