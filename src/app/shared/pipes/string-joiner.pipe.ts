import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringJoiner',
  pure: false,
})
export class StringJoinerPipe implements PipeTransform{
    transform(words: string[], separator: string) {
        let joinedString = '';
        words.forEach(element => {
            joinedString += element + separator;
        });
    return joinedString;
    }
}
