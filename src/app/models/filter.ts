import { AbstractControl } from '@angular/forms';

export interface FilterForm {
  gender: AbstractControl<string | null>;
  firstName: AbstractControl<string | null>;
  country: AbstractControl<string | null>;
  city: AbstractControl<string | null>;
}
export interface Filter {
  gender?: string | null;
  firstName?: string | null;
  country?: string | null;
  city?: string | null;
}
