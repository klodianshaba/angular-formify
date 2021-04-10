import {FieldModel, FieldState, FieldTypes} from '../models';

export class ColorFieldControl extends FieldModel {
  constructor(overwrite: FieldState  = {}) {
    const  field: FieldModel =  new FieldModel({
      controlName: 'color',
      fieldType: FieldTypes.radio,
      label: 'Color',
      defaultValue: 'primary',
      options: [{text: 'Primary', value: 'primary'}, {text: 'Accent', value: 'accent'}, {text: 'Warn', value: 'warn'}]
    });
    super(Object.assign(field , overwrite));
  }
}
