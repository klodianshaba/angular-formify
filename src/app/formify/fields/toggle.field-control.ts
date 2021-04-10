
import {FieldModel, FieldState, FieldTypes, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';

export class ToggleFieldControl extends FieldModel {
  constructor(overwrite: FieldState  = {}) {
    const  field: FieldModel = new FieldModel({
      controlName: 'toggle',
      label: 'Show color',
      defaultValue: true
    });
    super(Object.assign(field , overwrite));
  }
}
