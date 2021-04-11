import {FieldModel, FieldState, FieldTypes, GroupModel, GroupState, ValidatorModel} from '../models';
import {Validators} from '@angular/forms';

export class ExercisesGroupControl extends GroupModel {
  constructor(overwrite: GroupState  = {}) {
    const  group: GroupModel = new GroupModel({
      controlName: 'exercises',
      label: 'Exercises:',
      controls: [
        new FieldModel({controlName: 'running', label: 'Running',  defaultValue: true}),
        new FieldModel({controlName: 'skipping', label: 'Skipping',  defaultValue: false}),
        new FieldModel({controlName: 'cycling', label: 'Cycling',  defaultValue: false}),
        new FieldModel({controlName: 'burpee', label: 'Burpee',  defaultValue: false}),
      ]
    });
    super(Object.assign(group , overwrite));
  }
}
