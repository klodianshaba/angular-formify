import {FieldModel, FieldState, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';
import {Email} from './regex';
export class EmailFieldControl extends FieldModel {
  constructor(overwrite: FieldState = {}) {
    const field: FieldModel = new FieldModel({
      controlName: 'email',
      label: 'Email address',
      placeholder: 'email',
      icon: 'email',
      autoComplete: 'off',
      validators: [
        {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
        {validator: Validators.pattern(Email) , errorCode: 'pattern' , description: 'Email address is incorrect'},
        {validator: null, errorCode: 'exist' , description: 'This email exist in server'},
      ]
    });
    super(Object.assign(field, overwrite));
  }
}
