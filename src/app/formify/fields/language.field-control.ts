import {FieldModel, FieldState, FieldTypes, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';

export class LanguageFieldControl extends FieldModel {
  constructor(overwrite: FieldState  = {}) {
    const  field: FieldModel =  new FieldModel({
      controlName: 'language',
      fieldType : FieldTypes.select,
      label: 'Choose your language',
      placeholder: 'language',
      autoComplete: 'off',
      defaultValue: 'en',
      options: [{text: 'Al', value: 'al'}, {text: 'EN', value: 'en'}],
      validators: [
        new ValidatorModel({validator: Validators.required, errorCode: 'required', description: 'language is required'}),
      ]
    });
    super(Object.assign(field , overwrite));
  }
}
