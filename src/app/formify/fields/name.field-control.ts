import {FieldModel, FieldState} from '../models';
import {Validators} from '@angular/forms';

export class NameFieldControl extends FieldModel {
  constructor(overwrite: FieldState  = {}) {
    const  field: FieldModel =  new FieldModel({
      controlName: 'name',
      icon: 'assignment',
      label: 'Enter your name',
      validators: [
        {validator: Validators.required, errorCode: 'required', translationCode: 'ERRORS.REQUIRED'},
        {validator: Validators.minLength(3), errorCode: 'minlength', description: 'Minimum 3 characters required', parameters: {value: 3}},
      ]
    });
    super(Object.assign(field , overwrite));
  }
}
