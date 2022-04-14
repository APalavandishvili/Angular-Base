import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class DurationPipe implements PipeTransform{
    transform(seconds: number) {
        var hours = Math.floor(seconds / (60 * 60));

    var divisor_for_minutes = seconds % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);

    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    return `${hours}:${minutes}`;
    }
}
