import {FieldModel, FieldState, FieldTypes, GroupModel, GroupState, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';
import {Email, Phone} from '../fields';

export class ContactGroupControl extends GroupModel {
  constructor(overwrite: GroupState  = {}) {
    const  group: GroupModel = new GroupModel({
      controlName: 'contact',
      label: 'Contact:',
      controls: [
        new FieldModel({
          controlName: 'phone', prefix: '+355', type: 'tel', label: 'Number phone', placeholder: 'phone', icon: 'phone' , autoComplete: 'off',
          validators: [
            {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
            {validator: Validators.pattern(Phone) , errorCode: 'pattern' , description: 'Phone number is incorrect'},
            {validator: null, errorCode: 'exist' , description: 'This phone exist in server'},
          ]
        }),
        new FieldModel({
          controlName: 'email', label: 'Email address', placeholder: 'email', icon: 'email', autoComplete: 'off',
          validators: [
            {validator: Validators.required, errorCode: 'required', description: 'identity is required'},
            {validator: Validators.pattern(Email) , errorCode: 'pattern' , description: 'Email address is incorrect'},
            {validator: null, errorCode: 'exist' , description: 'This email exist in server'},
          ]
        }),
        new FieldModel({
          controlName: 'location', label: 'Enter your location', placeholder: 'location', icon: 'location_on', autoComplete: 'off',
        })
      ]
    });
    super(Object.assign(group , overwrite));
  }
}
