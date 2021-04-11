import {FieldModel, FieldState} from '../models';
import {Validators} from '@angular/forms';
export class PasswordFieldControl extends FieldModel{
  constructor(overwrite: FieldState  = {}) {
    const field: FieldModel = new FieldModel({
      controlName: 'password',
      icon: 'vpn_key',
      type: 'password',
      label: 'Enter password',
      placeholder: 'password',
      validators: [
        {validator: Validators.required, errorCode: 'required', description: 'Password is required'},
        {validator: Validators.minLength(8), errorCode: 'minlength', description: 'Minimum 8 characters are required', parameters: {value: 8}},
        {validator: null, errorCode: 'invalid' , description: 'Password is invalid'},
      ]
    });
    super(Object.assign(field , overwrite));
  }
}
