import {FieldModel, FieldState, FieldTypes, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';
export class BiographyFieldControl extends FieldModel {
  constructor(overwrite: FieldState  = {}) {
    const  field: FieldModel = new FieldModel({
      controlName: 'biography',
      fieldType : FieldTypes.textarea,
      label: 'Describe your biography',
      placeholder: 'biography',
      autoComplete: 'off',
      validators: [
        new ValidatorModel({validator: Validators.required, errorCode: 'required', description: 'biography is required'}),
      ]
    });
    super(Object.assign(field , overwrite));
  }
}
