import { AbstractControl, ValidationErrors, ValidatorFn, FormGroup } from '@angular/forms';

export function MustMatch(controlName: string, matchingControlName: string): ValidatorFn {  // Ensures that the Password and Confirm Password fields have the same value.
  return (formGroup: AbstractControl): ValidationErrors | null => {
    const control = formGroup.get(controlName);
    const matchingControl = formGroup.get(matchingControlName);

    if (control && matchingControl && control.value !== matchingControl.value) {
      matchingControl.setErrors({ mustMatch: true });
      return { mustMatch: true };
    } else {
      matchingControl?.setErrors(null);
      return null;
    }
  };
}
