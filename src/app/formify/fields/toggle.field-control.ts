import {FieldModel, FieldState, FieldTypes} from '../models';

export class ToggleFieldControl extends FieldModel {
  constructor(overwrite: FieldState  = {}) {
    const  field: FieldModel = new FieldModel({
      controlName: 'toggle',
      label: 'Toggle',
      defaultValue: true,
      fieldType: FieldTypes.toggle,
    });
    super(Object.assign(field , overwrite));
  }
}
