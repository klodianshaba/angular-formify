import {FieldModel, FieldState, FieldTypes, GroupModel, GroupState, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';

export class AddressGroupControl extends GroupModel {
  constructor(overwrite: GroupState  = {}) {
    const  field: GroupModel = new GroupModel({
      controlName: 'address',
      controls: [
        new FieldModel({
          controlName: 'address', label: 'Enter your address', placeholder: 'address', autoComplete: 'off',
          validators: [
            {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
          ]
        }),
        new FieldModel({
          controlName: 'city', label: 'Enter city', placeholder: 'city', autoComplete: 'off',
          validators: [
            {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
          ]
        }),
        new FieldModel({
          controlName: 'country', fieldType: FieldTypes.select, label: 'Choose country', placeholder: 'country', autoComplete: 'off', options: [{text: 'Albania', value: 'Al'}, {text: 'England', value: 'En'}, {text: 'Germany', value: 'Gr'}],
          validators: [
            {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
          ]
        }),
        new FieldModel({
          controlName: 'zip', label: 'Enter zip code', placeholder: 'zip code', autoComplete: 'off',
          validators: [
            {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
          ]
        }),
      ]
    });
    super(Object.assign(field , overwrite));
  }
}
