import {FieldModel, GroupModel, GroupState} from '../models';
import {EmailFieldControl} from '../fields/email.field-control';
import {PhoneFieldControl} from '../fields/phone.field-control';
export class ContactGroupControl extends GroupModel {
  constructor(overwrite: GroupState  = {}) {
    const  group: GroupModel = new GroupModel({
      controlName: 'contact',
      label: 'Contact:',
      controls: [
        new PhoneFieldControl(),
        new EmailFieldControl(),
        new FieldModel({
          controlName: 'location', label: 'Enter your location', placeholder: 'location', icon: 'location_on', autoComplete: 'off',
        })
      ]
    });
    super(Object.assign(group , overwrite));
  }
}
