import {FieldModel, FieldState, FieldTypes, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';
export class CountryFieldControl extends FieldModel {
  constructor(overwrite: FieldState = {}) {
    const field: FieldModel = new FieldModel({
      controlName: 'country',
      fieldType: FieldTypes.select,
      label: 'Choose country',
      placeholder: 'country',
      autoComplete: 'off',
      options: [{text: 'Albania', value: 'Al'}, {text: 'England', value: 'En'}, {text: 'Germany', value: 'Gr'}],
      validators: [
        new ValidatorModel({validator: Validators.required, errorCode: 'required', description: 'identity is required'}),
      ]
    });
    super(Object.assign(field, overwrite));
  }
}
