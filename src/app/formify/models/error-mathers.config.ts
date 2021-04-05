import {FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!( control && control.invalid && isSubmitted );
  }
}

export const MatchPassword: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if (password.value !== confirmPassword.value && confirmPassword.value) {
    confirmPassword.setErrors({notMatch: true});
  } else {
    if (confirmPassword.hasError('notMatch')) {
      delete  confirmPassword.errors['notMatch'];
      confirmPassword.updateValueAndValidity();
    }
  }
  return null;
};

export class MyErrorStatePasswordMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    const data = control.parent.value;
    return !!( control  && data.password !== data.confirmPassword && isSubmitted  );
  }
}
