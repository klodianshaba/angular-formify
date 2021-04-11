import {FieldModel, FieldState, FieldTypes, GroupModel, GroupState, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';
import {CountryFieldControl} from '../fields/country.field-control';
export class AddressGroupControl extends GroupModel {
  constructor(overwrite: GroupState  = {}) {
    const  group: GroupModel = new GroupModel({
      controlName: 'address',
      label: 'address:',
      controls: [
        new FieldModel({
          controlName: 'street', label: 'Enter your street', placeholder: 'street', icon: 'add_road' , autoComplete: 'off',
          validators: [
            new ValidatorModel({validator: Validators.required, errorCode: 'required', description: 'identity is required'}),
          ]
        }),
        new FieldModel({
          controlName: 'city', label: 'Enter city', placeholder: 'city', icon: 'location_city' , autoComplete: 'off',
          validators: [
            {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
          ]
        }),
        new CountryFieldControl(),
        new FieldModel({
          controlName: 'zip', label: 'Enter zip code', type: 'number' , placeholder: 'zip code', icon: 'pin' , autoComplete: 'off',
          validators: [
            {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
          ]
        }),
      ]
    });
    super(Object.assign(group , overwrite));
  }
}
