import { DatePipe } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'duration'
})
export class CreationDatePipe implements PipeTransform{
    constructor(public datepipe: DatePipe){}

    transform(date: Date) {
        let result = this.datepipe.transform(date, 'dd.MM.yyyy');
        return result;
    }
}
