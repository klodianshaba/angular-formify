import {FieldModel, FieldState, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';
import {Phone} from './regex';
export class PhoneFieldControl extends FieldModel {
  constructor(overwrite: FieldState = {}) {
    const field: FieldModel = new FieldModel({
      controlName: 'phone',
      prefix: '+355', type: 'tel',
      label: 'Number phone',
      placeholder: 'phone',
      icon: 'phone',
      autoComplete: 'off',
      validators: [
        {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
        {validator: Validators.pattern(Phone) , errorCode: 'pattern' , description: 'Phone number is incorrect'},
        {validator: null, errorCode: 'exist' , description: 'This phone exist in server'},
      ]
    });
    super(Object.assign(field, overwrite));
  }
}

