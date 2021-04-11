import {FieldModel, FieldState, FieldTypes, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';

export class LanguageFieldControl extends FieldModel {
  constructor(overwrite: FieldState  = {}) {
    const  field: FieldModel = new FieldModel({
      controlName: 'language',
      fieldType : FieldTypes.select,
      label: 'Choose your language',
      placeholder: 'language',
      autoComplete: 'off',
      defaultValue: 'en',
      options: [{text: 'Shqip', value: 'al'}, {text: 'English', value: 'en'}, {text: 'Italiano', value: 'it'}, {text: 'Espanol', value: 'es'} , {text: 'Francais', value: 'fr'}],
      validators: [
        new ValidatorModel({validator: Validators.required, errorCode: 'required', description: 'language is required'}),
      ]
    });
    super(Object.assign(field , overwrite));
  }
}
