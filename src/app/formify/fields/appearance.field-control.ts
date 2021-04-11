import {FieldModel, FieldState, FieldTypes} from '../models';
export class AppearanceFieldControl extends FieldModel {
  constructor(overwrite: FieldState  = {}) {
    const  field: FieldModel =  new FieldModel({
      controlName: 'appearance',
      fieldType: FieldTypes.radio,
      label: 'Appearance',
      defaultValue: 'legacy',
      options: [{text: 'Legacy', value: 'legacy'}, {text: 'Standard', value: 'standard'}, {text: 'Fill', value: 'fill'}, {text: 'Outline', value: 'outline'}]
    });
    super(Object.assign(field , overwrite));
  }
}
