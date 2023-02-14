import { Pipe, PipeTransform } from '@angular/core';

export const enum genderType {
  Female = 'female',
  Male = 'male',
}

@Pipe({
  name: 'gender',
  standalone: true,
})
export class GenderPipe implements PipeTransform {
  transform(value: string | undefined, ...args: unknown[]): string {
    let newValue = value || '';
    switch (value) {
      case genderType.Female:
        newValue += ' <i class="bi bi-gender-female"></i>';
        break;

      case genderType.Male:
        newValue += ' <i class="bi bi-gender-male"></i>';
        break;
    }
    return newValue;
  }
}
