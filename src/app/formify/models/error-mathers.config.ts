import {AbstractControl, FormControl, FormGroup, FormGroupDirective, NgForm, ValidationErrors, ValidatorFn} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!( control && control.invalid && isSubmitted );
  }
}

export const MatchConfirmPassword: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  if (password.value !== confirmPassword.value && confirmPassword.value) {
    console.log('not match');
    confirmPassword.setErrors({notMatch: true});
  } else {
    if (confirmPassword.hasError('notMatch')) {
      delete confirmPassword.errors['notMatch'];
      confirmPassword.updateValueAndValidity();
      console.log('match');
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
